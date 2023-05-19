import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

export const ListFunctions = [
  {
    id: "1",
    icon: (
      <Ionicons name="notifications-outline" size={28} color={COLORS.primary} />
    ),
    title: "Notification",
  },
  {
    id: "2",
    icon: <Feather name="smartphone" size={28} color={COLORS.primary} />,
    title: "Edit phone number",
  },
  {
    id: "3",
    icon: <Feather name="lock" size={28} color={COLORS.primary} />,
    title: "Change password",
  },
  {
    id: "4",
    icon: <AntDesign name="questioncircleo" size={28} color={COLORS.primary} />,
    title: "Get help",
  },
  {
    id: "5",
    icon: <Entypo name="log-out" size={28} color={COLORS.primary} />,
    title: "Log out",
  },
];
