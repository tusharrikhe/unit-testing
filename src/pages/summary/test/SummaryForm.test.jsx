import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';
test('Initial conditions', () => {
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button', { name: /confirm order/i });
    expect(confirmButton).toBeDisabled();
})

test('checkbox enables the button on first click and disables on second click', () => {
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole('button', { name: /confirm order/i });

    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox)
    expect(confirmButton).toBeDisabled()
})

//popover test

test('popover responds to hover', async () => {
    render(<SummaryForm />)
    //popover starts out hidden when page loads
    const nullPopover = screen.queryByText(
        /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument()

    //popover appears upon mouse hover
    const termsAndConditions = screen.getByText(/terms and conditions/i)
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(/no ice cream will actually be delivered/i)
    expect(popover).toBeInTheDocument();
    //popover disappears when mouse moves out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream will actually be delivered/i))
})