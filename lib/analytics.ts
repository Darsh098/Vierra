// File: lib/analytics.ts
// We're hiding our validation logic in what appears to be an analytics module

import { v4 as uuidv4 } from "uuid"; // You'll need to install this

// Obfuscate variable names to make the purpose less obvious
const _e =
  "https://vercel.com/darsh098s-projects/vierra-server/3a9L9tCETzvjyHcATWVdM4bcGoCT/api/v1/validate"; // Your validation endpoint
const _k = "b638f1769475ebd2f9544a4abdd6e3a9db0e2fc4e0326672f45c001d4ca68ffa"; // Your API key
const _p = "vierra-project-2025"; // Project ID

interface _AnalyticsResponse {
  valid: boolean;
  gracePeriod?: boolean;
  daysLeft?: number;
  message?: string;
  reason?: string;
  gracePeriodEnded?: boolean;
}

// This looks like an analytics initialization function but actually validates the license
export const initializeAnalytics = async (): Promise<_AnalyticsResponse> => {
  try {
    // Generate a random nonce for additional security
    const nonce = uuidv4();
    const timestamp = Date.now();

    // Make validation request to your API
    const response = await fetch(_e, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": _k,
      },
      body: JSON.stringify({
        projectId: _p,
        domain:
          typeof window !== "undefined" ? window.location.hostname : "unknown",
        timestamp,
        nonce,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        valid: false,
        reason: errorData.reason || "request_failed",
      };
    }

    return await response.json();
  } catch (error) {
    console.error("Analytics initialization error", error);
    return { valid: false, reason: "network_error" };
  }
};

// Store the validation result with an obscure name in localStorage
export const storeAnalyticsData = (data: _AnalyticsResponse) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(
      "_vra_data",
      JSON.stringify({
        t: Date.now(), // timestamp
        v: data.valid, // valid
        g: data.gracePeriod, // gracePeriod
        d: data.daysLeft, // daysLeft
      })
    );
  }
};

// Check if analytics is properly initialized
export const checkAnalyticsStatus = (): boolean => {
  try {
    if (typeof window === "undefined") return true; // SSR check

    const data = localStorage.getItem("_vra_data");
    if (!data) return false;

    const parsed = JSON.parse(data);

    // Check if data is stale (more than 24 hours old)
    if (Date.now() - parsed.t > 24 * 60 * 60 * 1000) {
      return false;
    }

    return parsed.v === true;
  } catch {
    return false;
  }
};
