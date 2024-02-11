
import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';
import { StrictMode } from 'react';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);