"use client";

import { useState } from "react";
import { CustomTabs } from "@/modules/shared/components/CustomTabs";
import { CustomInputSearch } from "@/modules/shared/components/CustomInputSearch";
import { ClearButton } from "@/modules/shared/components/ClearButton";
import { LoadMoreButton } from "@/modules/shared/components/LoadMoreButton";
import { SectionHeader } from "../SectionHeader";
import { LEVEL_OPTIONS } from "../../constants/explore.const";
import { EmptyState } from "../EmptyState";
import { SignCard } from "./SignCard";
import { CARDS } from "@/modules/public/services/signs";
import { useExploreAnimation } from "@/modules/public/modules/explore/hooks/useExploreAnimation";

export function SignsContainer() {
	const { container } = useExploreAnimation();
	const [searchQuery, setSearchQuery] = useState("");
	const [level, setLevel] = useState("all");

	return (
		<main className="flex flex-col items-center w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-20">
			<section
				ref={container}
				id="explorar"
				className="w-full py-24 md:py-32 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center"
			>
				<div className="max-w-7xl w-full flex flex-col gap-16">
					<SectionHeader
						eyebrow="BIBLIOTECA VISUAL"
						title={
							<>
								Explora el{" "}
								<span className="italic text-primary">
									Lenguaje de las Manos
								</span>
							</>
						}
						description="Una colección selecta de gestos visuales, expresiones y señas. Domina el arte de la conexión a través del movimiento y la narrativa táctil."
						hrefBtnBack="/explorar"
						labelBtnBack="Volver a categorias"
					/>

					<div className="explore-element relative z-40 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-6">
						<CustomTabs
							options={LEVEL_OPTIONS}
							value={level}
							onChange={setLevel}
						/>

						<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
							<div className="flex gap-2 w-full sm:w-auto">
								<CustomInputSearch
									value={searchQuery}
									className="w-full sm:max-w-60 flex-1"
									onChange={setSearchQuery}
								/>
							</div>

							<ClearButton
								onClear={() => {
									setSearchQuery("");
									setLevel("all");
								}}
								label="Limpiar filtros"
							/>
						</div>
					</div>

					{CARDS.length === 0 && (
						<EmptyState
							title="No encontramos resultados"
							description="Parece que no hay coincidencias exactas. Intenta buscar con otras palabras o limpia los filtros actuales."
						/>
					)}

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{CARDS.map((card) => (
							<SignCard
								key={card.id}
								id={card.id}
								title={card.title}
								description={card.description}
								imageUrl={card.imageUrl}
								level={card.level}
								category={card.category}
								href={`/explorar/${card.category}/${card.id}`}
							/>
						))}
					</div>

					<LoadMoreButton />
				</div>
			</section>
		</main>
	);
}
