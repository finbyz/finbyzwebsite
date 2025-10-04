import { List } from "@/components/sections/list";

const rights = [
  "the right to access.",
  "the right to rectification.",
  "the right to erasure.",
  "the right to restrict processing.",
  "the right to object to processing.",
  "the right to data portability.",
  "the right to complain to a supervisory authority.",
  "the right to withdraw consent."
];

export default function UserRightsList() {
  return (
    <List
      title="Your principal rights under data protection law are:"
      items={rights}
    />
  );
}
