# Webbeezwork Analytics & CRO Plan

## 1. Tracking Infrastructure
- **Google Analytics 4 (GA4)**: Primary source of truth for traffic and engagement.
- **Google Tag Manager (GTM)**: Container for all tracking scripts to keep code clean.
- **Hotjar / Microsoft Clarity**: Heatmaps and session recordings to analyze user behavior on the Bento Grid and Health Check tool.

## 2. Key Conversion Events (Goals)
We will track the following high-value actions as "Conversions" in GA4:

| Event Name | Trigger | Priority |
| :--- | :--- | :--- |
| `submit_health_check` | User clicks "Analyze" on the Health Check tool | High |
| `lead_magnet_download` | User clicks "Get Full Audit PDF" | High |
| `book_strategy_click` | User clicks any "Book Strategy" button | Critical |
| `whatsapp_click` | User clicks the WhatsApp contact button | Medium |
| `service_tile_expand` | User clicks/hovers to expand a Bento tile | Low (Engagement) |

## 3. Custom Dimensions
- **User Type**: "Hunter" (Fast interactions) vs "Curator" (Long session duration, deep scroll).
- **Service Interest**: Which Bento tile was interacted with most?

## 4. CRO Experiments (A/B Testing)
- **Hero Headline**: Test "Findable, Clickable, Profitable" vs a more direct "Get More Leads".
- **CTA Color**: Test Brand Yellow vs White for secondary CTAs.
- **Health Check Placement**: Test Hero placement vs dedicated section.

## 5. Implementation Guide
1. Create a GTM account and add the container ID to `src/app/layout.tsx`.
2. Use `window.dataLayer.push()` in the `HealthCheck` component when the user submits.
3. Set up a "Thank You" state or page for accurate conversion tracking.
