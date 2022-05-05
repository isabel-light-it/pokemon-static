import { useTheme, Text, Spacer, Image, Link } from '@nextui-org/react'
import React from 'react'
import NextLink from 'next/link'

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray800.value
        }}>
            <NextLink href="/" passHref>
                <Link>
                    <Image
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                        alt="Icono de la app"
                        width={70}
                        height={70} />
                </Link>
            </NextLink>
            <NextLink href="/" passHref>
                <Link>

                    <Text color="white" h2> P</Text>
                    <Text color="white" h3> okemon</Text>
                </Link>

            </NextLink>


            <Spacer css={{ flex: 1 }} />
            <NextLink href="/favorites" passHref>
                <Link>
                    <Text color="white" > Favoritos</Text>
                </Link>

            </NextLink>

        </div>
    )
}

