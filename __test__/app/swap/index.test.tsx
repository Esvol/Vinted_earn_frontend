import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Swap from '@/app/swap/page'
import { renderWithProviders } from '../../test-utils'
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw'; 


export const handlers = [
    http.patch('/swap-for-discount', () => {
        return HttpResponse.json({user: null})
    })
];

export const server = setupServer(...handlers);

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

        expect(screen.getByRole('CLOTHES')).toBeInTheDocument()
    })
})

