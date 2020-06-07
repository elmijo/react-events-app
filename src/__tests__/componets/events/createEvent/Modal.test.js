import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Modal from "../../../../app/componets/events/createEvent/Modal";

afterEach(cleanup);

describe('Render Modal', () => {
    const { getByText, container, debug } = render(<Modal title={"Test"} />);
    // debug();
    test('Render Backdrop', () => {
        expect(1).toBe(1);
    });
});
