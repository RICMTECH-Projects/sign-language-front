import { Suspense } from 'react';
import { SignDetailsContainer } from '@/modules/public/modules/explore/components/SingDetails/SignDetailsContainer';

export default function SignDetailPage({ params }: { params: Promise<{ signId: string }> }) {
	return (
		<Suspense>
			<SignDetailsContainer params={params} />
		</Suspense>
	);
}
