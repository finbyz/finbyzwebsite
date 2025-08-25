export type ComponentType =
  | "Text"
  | "Hero"
  | "Card"
  | "Carousal"
  | "Form"
  | "Timeline"
  | "Upload/Social/Spinner/Tooltip"
  | "FOQ"
  | "Search"
  | "Footer";

const NAME_TO_TYPE_ENTRIES: Array<[ComponentType, string[]]> = [
  ["Text", [
    "Content + Illustration (Right)",
    "Content + Illustration (Left)",
    "ERP Intro Text",
    "Call to Action",
    "Modal Dialog",
    "Comment Section",
    "Call to Action"
  ]],
  ["Hero", [
    "Hero Section",
    "Hero Section Without Button (Alternative)"
  ]],
  ["Card", [
    "Testimonials Section",
    "Service Cards",
    "Stats Section",
    "Image Gallery",
    "Pricing Cards",
    "Team Section",
    "Blog Grid",
    "Notification Toast",
    "Error Boundary",
    "Features Section",
    "Team Expertise",
    "Technology Stack",
    "Process Workflow",
    "Global Presence",
    "Resource Center",
    "Contact Information",
    "Benefits",
    "Differentiators",
    "Services"
  ]],
  ["Carousal", [
    "Testimonial Carousel",
    "Stats Showcase",
    "Client Logos"
  ]],
  ["Form", [
    "Business Slider",
    "Contact Form"
  ]],
  ["Timeline", [
    "Timeline Section",
    "Process Timeline"
  ]],
  ["Upload/Social/Spinner/Tooltip", [
    "Loading Spinner",
    "File Upload",
    "Social Media Icons",
    "Tooltip Component"
  ]],
  ["FOQ", [
    "Accordion Section",
    "FAQ Section",
    "FAQ"
  ]],
  ["Search", [
    "Search Bar",
    "Filter Tags",
    "Breadcrumbs",
    "Sidebar Menu"
  ]],
  ["Footer", [
    "Footer Links"
  ]]
];

const NAME_TO_TYPE_MAP: Record<string, ComponentType> = Object.fromEntries(
  NAME_TO_TYPE_ENTRIES.flatMap(([type, names]) => names.map((n) => [n.toLowerCase(), type]))
);

export function inferComponentType(componentDisplayName?: string): ComponentType | undefined {
  if (!componentDisplayName) return undefined;
  return NAME_TO_TYPE_MAP[componentDisplayName.toLowerCase()];
}
