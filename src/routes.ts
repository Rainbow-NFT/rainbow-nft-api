import { _currentTokenId, totalSupply, _tokenURI } from './providers'

const createRoute = (call: Function) => async (req, res) => {
    try {
        const value = await call()
        res.send(value.toString())
    }
    catch (error) {
        console.log(error)
    }
}

export const currentTokendId_ = createRoute(_currentTokenId)
export const totalSupply_ = createRoute(totalSupply)
export const tokenURI_ = createRoute(_tokenURI)
