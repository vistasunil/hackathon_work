import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GrowthBook, GrowthBookProvider, useFeature } from "@growthbook/growthbook-react";
import { useEffect } from "react";

const FEATURES_ENDPOINT: string = (process.env.NEXT_PUBLIC_GB_KEY as string);
console.log(FEATURES_ENDPOINT); // Console output shows correct value - http://growthbook-api.int.dev.mykronos.com/api/features/key_keng_79ff66bd7715e3bb
// Create a GrowthBook instance
const growthbook = new GrowthBook({
  trackingCallback: (experiment, result) => {
    console.log({
      experimentId: experiment.key, 
      variationId: result.variationId
    })
  }
});

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // Load feature definitions from API
    fetch(FEATURES_ENDPOINT)
      .then((res) => res.json())
      .then((json) => {
        growthbook.setFeatures(json.features);
      });
    
    // TODO: replace with real targeting attributes
    growthbook.setAttributes({
      "id": "123",
      "deviceId": "foo",
      "company": "foo",
      "loggedIn": true,
      "employee": true,
      "country": "foo",
      "browser": "foo",
      "url": "foo"
    })
  }, [])


  return (
    <GrowthBookProvider growthbook={growthbook}>
      <Component {...pageProps} />
    </GrowthBookProvider>
  )
}

export default MyApp
