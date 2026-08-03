import { mockProducts } from '@/app/mocks/products'
import { FavoritesProvider } from '../../State/FavoritesProvider'
import { render, screen } from '@testing-library/react'
import ProductList from './ProductList'

const mockSetFavorites = jest.fn()

jest.mock('@/app/hooks/useFavoritesContext', () => ({
    useFavoritesContext: () => ({
        setFavorites: mockSetFavorites,
    })
}))

describe('ProductList', () => {
    it('deve exibir o título "Produtos disponíveis:"', () => {
        render(
            <FavoritesProvider>
            <ProductList products={mockProducts} />
            </FavoritesProvider>
        )
        expect(screen.getByText(/Produtos disponíveis:/i)).toBeInTheDocument()
    })

    it('deve renderizar todos os produtos passados via prop', () => {
        render(
            <FavoritesProvider>
                <ProductList products={mockProducts} />
            </FavoritesProvider>
        )
        mockProducts.forEach((product) => {
            expect(screen.getByText(product.nome)).toBeInTheDocument()
        })
    })

    it('nao deve rendezirar nenhum card quando a lista de produtos estiver vazia', () => {
        render(
            <FavoritesProvider>
                <ProductList products={[]} />
            </FavoritesProvider>
        )
        expect(screen.getByText(/Produtos disponíveis:/i)).toBeInTheDocument()

        expect(screen.queryByText(mockProducts[0].nome)).not.toBeInTheDocument()
    })
})