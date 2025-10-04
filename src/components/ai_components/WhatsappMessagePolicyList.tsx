import { List } from "@/components/sections/list";

const messagePolicyItems = [
  "All Message Templates must be in compliance with WhatsApp's guidelines and be used for the intended function. WhatsApp is able to approve, review and deny the submission of any Message Template at any time. The user acknowledges they are accountable for the variable cost for Message Templates which are charged by Finbyz.",
  "If a person starts a conversation with an individual Customer, you are able to keep the conversation going via WhatsApp during up to 24 hours following the last message that was sent to you by the person for free (\"Customer Service Window\"). In addition, outside of the Customer Service Window, Customer may only send messages through approved Message Templates which is why Finbyz will invoice and charge Customer at the rate applicable.",
  "Customers can use automation in responding to inquiries to the Customer Service Window, but must also be able to provide quick, clear and clear escalation routes for human representatives."
];

export default function WhatsappMessagePolicyList() {
  return (
    <List
      title="WhatsApp Message Policy"
      items={messagePolicyItems}
    />
  );
}
