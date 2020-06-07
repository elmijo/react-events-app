import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Modal from "../../../../app/componets/events/createEvent/Modal";

afterEach(cleanup);

// debug();
test('Render Backdrop', () => {
    const { getByText, container, debug } = render(<Modal title={"Test"} />);
    expect(1).toBe(1);
});
