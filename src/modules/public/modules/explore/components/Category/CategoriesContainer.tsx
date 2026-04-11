'use client';

import { useState } from 'react';
import { CustomInputSearch } from '@/modules/shared/components/CustomInputSearch';
import { ClearButton } from '@/modules/shared/components/ClearButton';
import { LoadMoreButton } from '@/modules/shared/components/LoadMoreButton';
import { SectionHeader } from '../SectionHeader';
import { EmptyState } from '../EmptyState';
import { CATEGORIES } from '@/modules/public/services/signs';
import { useExploreAnimation } from '@/modules/public/modules/explore/hooks/useExploreAnimation';
import { CategoryCard } from './CategoryCard';

export function CategoriesContainer() {
	const [searchQuery, setSearchQuery] = useState('');
	const { container } = useExploreAnimation();

	return (
		<main className='flex flex-col items-center w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-20'>
			<section
				ref={container}
				id='explorar'
				className='w-full py-24 md:py-32 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center'>
				<div className='max-w-7xl w-full flex flex-col gap-16'>
					<SectionHeader
						eyebrow='BIBLIOTECA VISUAL'
						title={
							<>
								Explora las{' '}
								<span className='italic text-primary'>
									Categorías del Lenguaje de Señas
								</span>
							</>
						}
						description='Descubre cómo se organizan las señas según su propósito y contexto. Navega por categorías diseñadas para facilitar tu aprendizaje y comprender el lenguaje desde una estructura clara y práctica.'
					/>

					<div className='explore-element relative z-40 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-6'>
						<CustomInputSearch
							value={searchQuery}
							className='w-full sm:max-w-60 flex-1'
							onChange={setSearchQuery}
						/>

						<ClearButton
							onClear={() => {
								setSearchQuery('');
							}}
							label='Limpiar filtros'
						/>
					</div>

					{CATEGORIES.length === 0 && (
						<EmptyState
							title='No encontramos resultados'
							description='Parece que no hay coincidencias exactas. Intenta buscar con otras palabras o limpia los filtros actuales.'
						/>
					)}

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{CATEGORIES.map((cat) => (
							<CategoryCard
								key={cat.id}
								{...cat}
								href={`/explorar/${cat.id}`}
							/>
						))}
					</div>

					<LoadMoreButton />
				</div>
			</section>
		</main>
	);
}
