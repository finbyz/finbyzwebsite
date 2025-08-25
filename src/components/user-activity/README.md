# User Activity Page

This folder contains all the components and functionality for the user activity dashboard that displays after login.

## Structure

```
src/components/user-activity/
├── charts/                          # Chart components
│   ├── WorkIntensityChart.tsx      # Heatmap showing work intensity by hour and day
│   ├── ApplicationUsageChart.tsx   # Pie chart showing application usage time
│   ├── WebBrowsingTimeChart.tsx    # Pie chart showing web browsing time
│   └── ActivityTimeLine.tsx        # Line chart showing activity timeline
├── common/                          # Common UI components
│   ├── Breadcrumbs.tsx             # Navigation breadcrumbs
│   └── RecentActivity.tsx          # Recent activity images with infinite scroll
├── index.ts                         # Export file for all components
└── README.md                        # This documentation file
```

## Main Page

The main user activity page is located at `src/app/user-activity/page.tsx` and includes:

- Application usage chart (left column)
- Web browsing time chart (right column)
- Work intensity heatmap (full width)
- Recent activity timeline with screenshots

## Components

### Charts

1. **WorkIntensityChart**: Displays work intensity data in a heatmap format showing activity levels by hour and day of the week.

2. **ApplicationUsageChart**: Shows application usage time in a pie chart format with detailed tooltips.

3. **WebBrowsingTimeChart**: Displays web browsing time distribution across different domains in a pie chart.

4. **ActivityTimeLine**: Small line chart showing activity levels over time for specific hours.

### Common Components

1. **Breadcrumbs**: Navigation breadcrumbs for the page hierarchy.

2. **RecentActivity**: Displays user activity screenshots in a timeline format with infinite scrolling and modal image viewing.

## Dependencies

The components use the following libraries:

- `echarts` - For chart visualizations
- `reactstrap` - For UI components (Card, Modal, etc.)
- `frappe-react-sdk` - For API calls to Frappe backend
- `moment` - For date/time manipulation
- `react-intersection-observer` - For infinite scrolling

## API Endpoints

The components make calls to these Frappe API endpoints:

- `work_intensity` - For work intensity data
- `application_usage_time` - For application usage statistics
- `web_browsing_time` - For web browsing time data
- `user_activity_images` - For activity screenshots
- `activity_timeline` - For timeline data

## Usage

To use this page, navigate to `/user-activity` after login. The page will automatically fetch data based on the selected employee and date range from the Redux store.

## Features

- Responsive design with Bootstrap grid system
- Real-time data fetching from Frappe backend
- Interactive charts with tooltips and hover effects
- Infinite scrolling for activity images
- Modal image viewing for detailed inspection
- Date range filtering support
- Employee selection support
