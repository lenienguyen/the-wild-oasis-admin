import { differenceInDays, formatDistance, parseISO } from "date-fns";

// Handles both Date objects and ISO strings (e.g. from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

// Supabase needs an ISO date string
// Returns today in ISO format, at start or end of day
export const getToday = (options = {}) => {
  const today = new Date();

  // Necessary to compare with created_at from Supabase, not at 0.0.0.0, so need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last sec of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

// Formats a number as USD currency
export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
