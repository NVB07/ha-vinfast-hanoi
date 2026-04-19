"use client";

import { Next13ProgressBar } from "next13-progressbar";

export default function ProgressBarProvider() {
    return <Next13ProgressBar height="3px" color="#0088FF" options={{ showSpinner: false }} showOnShallow />;
}
