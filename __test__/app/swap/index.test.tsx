import React from 'react'
import { render, screen } from '@testing-library/react'
import Swap from '@/app/swap/page'
import { renderWithProviders } from '../../test-utils'

describe('Swap page', () => {
    it('Should render properly', () => {
        renderWithProviders(<Swap />, {
            preloadedState: {
                auth: {
                    user: null,
                    status: 'pending',
                    storageNavigation: 'cap'
                }
            }
        })

        const swapElement = screen.getByRole('region');
        expect(swapElement).toBeInTheDocument()
    })
})