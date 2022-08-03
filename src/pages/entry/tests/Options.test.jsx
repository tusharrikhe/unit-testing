import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('displays images for each scoop option from server', async () => {
    render(<Options optionType='scoops' />);

    //find images
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
    expect(scoopImages).toHaveLength(4);

    //confirm alt text of images

    const altText = scoopImages.map(img => img.alt);
    expect(altText).toEqual(['Mint chip Scoop', 'Vanilla Scoop', 'Chocolate Scoop', 'Salted caramel Scoop'])
})

test('displays images for each topping option from server', async () => {
    render(<Options optionType='toppings' />);

    const toppingImages = await screen.findAllByRole('img', { name: /topping$/i })
    expect(toppingImages).toHaveLength(3)

    //confirm alt text images
    const altText = toppingImages.map(element => element.alt);
    expect(altText).toEqual(['M&Ms topping', 'Hot fudge topping', 'Peanut butter cups topping'])
})