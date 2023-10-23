import Image from 'next/image'

function Navigation() {
    return (
        <div>
            <div>
                <figure></figure>

                <ul className="d-flex">
                    <li>Rent</li>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Manage Property</li>
                    <li>Resources</li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
