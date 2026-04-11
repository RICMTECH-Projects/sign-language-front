import AccesibilityContainer from "@/modules/public/modules/legal/components/AccesibilityContainer";
import { Suspense } from "react";

export const metadata = {
  title: "Accesibilidad | Signly",
  description: "Nuestra compromiso con una web accesible para todos.",
};

export default function AccesibilityPage() {
	return (
		<Suspense>
			<AccesibilityContainer />
		</Suspense>
	);
}
