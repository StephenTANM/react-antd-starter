export const centsToDollars = (num) => {
    return (num / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}