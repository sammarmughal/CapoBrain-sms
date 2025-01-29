import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'eoz72r3j',
  dataset: 'production',
  apiVersion: '2023-01-01', // Adjust to your API version
  useCdn: true, // `true` for faster, cache-friendly responses
});

export default client;
