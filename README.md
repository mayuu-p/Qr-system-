# Thyme & Whisk — QR Ordering Website

A responsive table QR ordering website for Thyme & Whisk, Nashik.

## Features
- Customer menu with categories, food photos, cart and order confirmation
- Table-specific QR URL support using `?restaurant=...&table=...`
- Customer order tracking and add-to-existing-order flow
- Staff sign-in and waiter/kitchen order dashboard
- Supabase database and realtime integration
- Mobile-first responsive layout
- Restaurant location link: https://maps.app.goo.gl/qJ21Z1Gfq9GfTs6C6

## Configuration
The app retains the Supabase project configuration and restaurant/table ID defaults from the previous QR ordering setup. Make sure the database schema, menu items, restaurant, and table records are configured in that Supabase project.

For a specific table QR, use:
`https://mayuu-p.github.io/Qr-system-/?restaurant=YOUR_RESTAURANT_UUID&table=YOUR_TABLE_UUID`

Staff dashboard:
`https://mayuu-p.github.io/Qr-system-/?staff=1`

## Deployment
GitHub Actions workflow in `.github/workflows/pages.yml` publishes this static site to GitHub Pages. In repository Settings → Pages, choose **GitHub Actions** as the build and deployment source if it is not already selected.
