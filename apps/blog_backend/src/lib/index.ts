
export const emailNormalizer = (email: string): string => {
  const normalized = email.toLowerCase().trim();

  const [localPart, domain] = normalized.split("@");

  if (!localPart || !domain) {
    return normalized;
  }

  const normalizedDomain = domain === "googlemail.com"
    ? "gmail.com"
    : domain;

  const providersWithPlusAliases = new Set([
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
  ]);

  let canonicalLocalPart = localPart;

  if (providersWithPlusAliases.has(normalizedDomain)) {
    // Remove +tag
    canonicalLocalPart = canonicalLocalPart.split("+")[0];
  }

  // Gmail ignores dots in the local part.
  if (normalizedDomain === "gmail.com") {
    canonicalLocalPart = canonicalLocalPart.replace(/\./g, "");
  }

  return `${canonicalLocalPart}@${normalizedDomain}`;
};

export const userNameGenerator = (firstName: string, lastName: string): string => {
  const firstPart = firstName.toLowerCase().trim();
  const lastPart = lastName.toLowerCase().trim();
  const randomNum = Math.floor(Math.random() * 1000);
  return `${firstPart}.${lastPart}${randomNum}`;
}
