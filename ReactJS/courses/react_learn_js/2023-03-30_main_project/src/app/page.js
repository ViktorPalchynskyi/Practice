'use client';
import React from 'react';
import '@/app/globals.scss';
import { Timer } from './components/Timer/Timer';
import { LayoutRenderProps, Toggle, ToggleButton, ToggleLabelOn, ToggleLable, ToggleLableOff, ToggleWithCustomButton } from './example';
import { Header } from './components/Header/Header';

export default function HomePage() {
    return (
        <div>
            <Timer />
            <Toggle>
                <ToggleButton />
                <ToggleLabelOn />
                <ToggleLableOff />
            </Toggle>
            <Toggle>
                <ToggleWithCustomButton />
                <ToggleLable />
            </Toggle>
            <LayoutRenderProps renderHeader={() => <Header />} renderFooter={(count) => <footer>Footer {count}</footer>}>
                <p>Hello there, my dear friend!</p>
            </LayoutRenderProps>
        </div>
    );
}
