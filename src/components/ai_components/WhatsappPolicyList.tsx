import { List } from "@/components/sections/list";

const policyItems = [
  "The Customer shall adhere to all the terms & conditions set by WhatsApp at all times. WhatsApp may update WhatsApp Business Policy without notice; by continuing to use the WhatsApp Business Products after such change, the Customer consents to such changes. (https://www.whatsapp.com/legal/business-policy/)",
  "The Customer is not in violation of the WhatsApp Commerce Policy and is not in any of the restricted industries. (https://www.whatsapp.com/legal/commerce-policy/)",
  "WhatsApp may add limits to businesses on the number of messages to send per day. All Customers must adhere to this Messaging Limit (https://developers.facebook.com/docs/whatsapp/api/rate-limits)",
  "WhatsApp has the absolute discretion to review, approve or reject any Message Templates (as defined in WhatsApp documentations) at any time.",
  "Customer agrees to ensure full compliance with WhatsApp Policies regarding sending of messages.",
  "WhatsApp does not offer a way to be notified when a user has blocked your sender, or to retrieve a list of users who have blocked you.",
  "Any violation of these WhatsApp policies may lead to suspension of the number by WhatsApp.",
  "WhatsApp has absolute discretion to limit or remove Customer’s access to or use of the WhatsApp Business Products if Customer receives excessive negative feedback, causes harm to WhatsApp or WhatsApp’s users, or violates or encourages others to violate our terms or policies, as determined by WhatsApp in our sole discretion. If WhatsApp terminates your account for violations of relevant WhatsApp Business terms or policies, WhatsApp may prohibit Customer and Customer organization from all future use of WhatsApp products.",
  "Finbyz Tech shall take no responsibility in case of any such violations. Any additional charges arising due to this shall be borne by the Customer.",
  "Once registered on finbyz.tech, Customers cannot reuse the WhatsApp number on WhatsApp Business App or WhatsApp mobile app. The Customer owns the phone number."
];

export default function WhatsappPolicyList() {
  return (
    <List
      title="WhatsApp & Usage Policy"
      items={policyItems}
    />
  );
}
