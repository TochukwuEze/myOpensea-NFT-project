import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'n670wijy',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skGybPniQnR4i228jA23Pk3yQM5ziA75ExERGdDZPjQsPTPbT02gln8yvRENuIMH3Thc1TZyEVy4LnYCGdP3J4VaXWUrWFZeQZndckTmLWzDl2N35gEqo5NOCBV4D2OdzChJNITtcR7emxheF9snoG56h8syZpos3rMpR38zOpodmrndL2x6',
    useCdn: false,
})