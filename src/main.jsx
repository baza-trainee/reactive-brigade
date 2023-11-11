import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);
