// /** @type {import('./$types').PageLoad} */
export async function load({ params }) {
return {
    content: `hello ${params.slug}`
}
}