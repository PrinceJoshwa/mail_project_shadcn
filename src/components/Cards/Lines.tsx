'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveLine } from '@nivo/line';

// Line chart component
const MyResponsiveLine = ({ data }) => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 5, right: 15, bottom: 90, left: 35 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
        />
    );
};

// Main component
export default function Lines() {
    const data = [
        {
            "id": "japan",
            "color": "hsl(9, 70%, 50%)",
            "data": [
                { "x": "plane", "y": 41 },
                { "x": "helicopter", "y": 165 },
                { "x": "boat", "y": 40 },
                { "x": "train", "y": 106 },
                { "x": "subway", "y": 137 },
                { "x": "bus", "y": 47 },
                { "x": "car", "y": 90 },
                { "x": "moto", "y": 273 },
                { "x": "bicycle", "y": 109 },
                { "x": "horse", "y": 25 },
                { "x": "skateboard", "y": 271 },
                { "x": "others", "y": 201 }
            ]
        },
        {
            "id": "france",
            "color": "hsl(273, 70%, 50%)",
            "data": [
                { "x": "plane", "y": 56 },
                { "x": "helicopter", "y": 17 },
                { "x": "boat", "y": 113 },
                { "x": "train", "y": 266 },
                { "x": "subway", "y": 147 },
                { "x": "bus", "y": 29 },
                { "x": "car", "y": 210 },
                { "x": "moto", "y": 195 },
                { "x": "bicycle", "y": 160 },
                { "x": "horse", "y": 23 },
                { "x": "skateboard", "y": 225 },
                { "x": "others", "y": 229 }
            ]
        },
        {
            "id": "us",
            "color": "hsl(61, 70%, 50%)",
            "data": [
                { "x": "plane", "y": 222 },
                { "x": "helicopter", "y": 85 },
                { "x": "boat", "y": 90 },
                { "x": "train", "y": 173 },
                { "x": "subway", "y": 50 },
                { "x": "bus", "y": 1 },
                { "x": "car", "y": 272 },
                { "x": "moto", "y": 74 },
                { "x": "bicycle", "y": 117 },
                { "x": "horse", "y": 248 },
                { "x": "skateboard", "y": 171 },
                { "x": "others", "y": 12 }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(13, 70%, 50%)",
            "data": [
                { "x": "plane", "y": 27 },
                { "x": "helicopter", "y": 44 },
                { "x": "boat", "y": 259 },
                { "x": "train", "y": 177 },
                { "x": "subway", "y": 138 },
                { "x": "bus", "y": 179 },
                { "x": "car", "y": 227 },
                { "x": "moto", "y": 24 },
                { "x": "bicycle", "y": 40 },
                { "x": "horse", "y": 270 },
                { "x": "skateboard", "y": 23 },
                { "x": "others", "y": 213 }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(329, 70%, 50%)",
            "data": [
                { "x": "plane", "y": 291 },
                { "x": "helicopter", "y": 56 },
                { "x": "boat", "y": 159 },
                { "x": "train", "y": 150 },
                { "x": "subway", "y": 169 },
                { "x": "bus", "y": 221 },
                { "x": "car", "y": 164 },
                { "x": "moto", "y": 31 },
                { "x": "bicycle", "y": 146 },
                { "x": "horse", "y": 268 },
                { "x": "skateboard", "y": 230 },
                { "x": "others", "y": 43 }
            ]
        }
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Lines</CardTitle>
                <CardDescription>These are the results of this week.</CardDescription>
            </CardHeader>
            <CardContent className="h-[264px] flex items-center w-full">
                <MyResponsiveLine data={data} />
            </CardContent>
        </Card>
    );
}
