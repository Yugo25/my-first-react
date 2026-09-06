import { Suspense, lazy } from 'react';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const lazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));

export default function LazyBasic() {
    return (
        <Suspense fallback={<p>Now loading...</p>}>
            <lazyButton />
        </Suspense>
    );
}