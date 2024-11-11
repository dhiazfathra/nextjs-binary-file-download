# Minimal Next.js Binary File Download

A minimal Next.js application that demonstrates downloading binary files (Excel) from an external API.

## Project Structure
```
minimal-download/
├── package.json
├── README.md
└── app/
    └── page.tsx
```

## Installation

1. Install dependencies:
```bash
bun install
```

2. Create a `.env.local` file in the root directory (optional):
```
API_BASE_URL=your_api_url
API_TOKEN=your_token
```

3. Run the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Features

- Single-file implementation with no extra dependencies
- Direct download from external API
- Loading state handling
- Error handling
- Clean binary file handling using Blob API
- Basic styling included

## Customization

To use with your API:

1. Replace the API URL in `handleDownload` function
2. Update the Authorization token
3. Modify the query parameters as needed
4. Adjust the filename and file type in the download handler

## Notes

- This is a client-side only implementation. For additional security, consider adding a server-side API route.
- The app uses minimal styling for demonstration purposes.
- Error handling is basic - enhance it based on your needs.
