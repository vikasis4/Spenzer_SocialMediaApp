export interface post_type {
    _id: string,
    author: string,
    author_id: string,
    author_img: string,
    image: string,
    description: string,
    tagged: string[],
    tags: string[],
    likes: number,
    commentId: string
}
export interface comment_type {
    author_name: string,
    author_id: string,
    comment: string,
    likes: number,
    replies: {replyToPersionId:string, author_name: string, author_id: string, comment: string, likes: number }[]
}

export const post: post_type[] = [
    {
        _id: 'f2g9cev2o9b2x',
        author: 'Vikas Singh',
        author_id: '@vikas_sanp',
        author_img: 'https://source.unsplash.com/random/200x200?sig=0',
        image: 'https://source.unsplash.com/random/200x200?sig=1',
        description: 'This is my best time and im loving it, hope for best This is my best time and im loving it, hope for best This is my best time and im loving it, hope for best This is my best time and im loving it, hope for best This is my best time and im loving it, hope for best This is my best time and im loving it, hope for best This is my best time and im loving it, hope for best This is my best time and im loving it, hope for best This is my best time and im loving it, hope for best',
        tagged: ['@ankus_293', "@weCHat_09", "@SHAMBY_82", "@De_souza_p2"],
        tags: ['#perfect', '#mySpace'],
        likes: 23019,
        commentId: '938dyh97xg3b32e1',
    },
    {
        _id: 'f2g9cev2o9b2x',
        author_img: 'https://source.unsplash.com/random/200x200?sig=12',
        author: 'Sham Singh',
        author_id: '@Wxs_202',
        image: 'https://source.unsplash.com/random/200x200?sig=2',
        description: 'This is my best time and im loving it, hope for best',
        tagged: ['@ankus_293', "@weCHat_09"],
        tags: ['#perfect', '#mySpace'],
        likes: 23019,
        commentId: '938dyh97xg3b32e1',
    },
    {
        _id: 'f2g9cev2o9b2x',
        author_img: 'https://source.unsplash.com/random/200x200?sig=13',
        author: 'Beer Biceps',
        author_id: '@ankus_293',
        image: 'https://source.unsplash.com/random/200x200?sig=3',
        description: 'This is my best time and im loving it, hope for best',
        tagged: ['@ankus_293', "@weCHat_09"],
        tags: ['#perfect', '#mySpace'],
        likes: 23019,
        commentId: '938dyh97xg3b32e1',
    },
    {
        _id: 'f2g9cev2o9b2x',
        author: 'Tonny Kakkar',
        author_img: 'https://source.unsplash.com/random/200x200?sig=14',
        author_id: '@weCHat_09',
        image: 'https://source.unsplash.com/random/200x200?sig=4',
        description: 'This is my best time and im loving it, hope for best',
        tagged: ['@ankus_293', "@weCHat_09"],
        tags: ['#perfect', '#mySpace'],
        likes: 23019,
        commentId: '938dyh97xg3b32e1',
    },
    {
        _id: 'f2g9cev2o9b2x',
        author: 'Lodu kumar',
        author_id: '@kjds_2',
        image: 'https://source.unsplash.com/random/200x200?sig=5',
        description: 'This is my best time and im loving it, hope for best',
        tagged: ['@ankus_293', "@weCHat_09"],
        tags: ['#perfect', '#mySpace'],
        likes: 23019,
        author_img: 'https://source.unsplash.com/random/200x200?sig=15',
        commentId: '938dyh97xg3b32e1',
    },
    {
        _id: 'f2g9cev2o9b2x',
        author: 'Gajni pillai',
        author_id: '@vikas_sanp',
        image: 'https://source.unsplash.com/random/200x200?sig=6',
        author_img: 'https://source.unsplash.com/random/200x200?sig=16',
        description: 'This is my best time and im loving it, hope for best',
        tagged: ['@ankus_293', "@weCHat_09"],
        tags: ['#perfect', '#mySpace'],
        likes: 23019,
        commentId: '938dyh97xg3b32e1',
    },
    {
        _id: 'f2g9cev2o9b2x',
        author: 'Milk Man',
        author_id: '@vikas_sanp',
        image: 'https://source.unsplash.com/random/200x200?sig=7',
        author_img: 'https://source.unsplash.com/random/200x200?sig=17',
        description: 'This is my best time and im loving it, hope for best',
        tagged: ['@ankus_293', "@weCHat_09"],
        tags: ['#perfect', '#mySpace'],
        likes: 23019,
        commentId: '938dyh97xg3b32e1',
    },
    {
        _id: 'f2g9cev2o9b2x',
        author: 'De Souza',
        author_id: '@vikas_sanp',
        author_img: 'https://source.unsplash.com/random/200x200?sig=18',
        image: 'https://source.unsplash.com/random/200x200?sig=8',
        description: 'This is my best time and im loving it, hope for best',
        tagged: ['@ankus_293', "@weCHat_09"],
        tags: ['#perfect', '#mySpace'],
        likes: 23019,
        commentId: '938dyh97xg3b32e1',
    },
    {
        _id: 'f2g9cev2o9b2x',
        author: 'Billu Rana',
        author_id: '@vikas_sanp',
        author_img: 'https://source.unsplash.com/random/200x200?sig=19',
        image: 'https://source.unsplash.com/random/200x200?sig=9',
        description: 'This is my best time and im loving it, hope for best',
        tagged: ['@ankus_293', "@weCHat_09"],
        tags: ['#perfect', '#mySpace'],
        likes: 23019,
        commentId: '938dyh97xg3b32e1',
    },
    {
        _id: 'f2g9cev2o9b2x',
        author: 'Yash Tomar',
        author_img: 'https://source.unsplash.com/random/200x200?sig=20',
        author_id: '@vikas_sanp',
        image: 'https://source.unsplash.com/random/200x200?sig=10',
        description: 'This is my best time and im loving it, hope for best',
        tagged: ['@ankus_293', "@weCHat_09"],
        tags: ['#perfect', '#mySpace'],
        likes: 23019,
        commentId: '938dyh97xg3b32e1',
    },
]

export const comments: comment_type[] = [
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post,Ullamco ea magna culpa elit minim velit incididunt reprehenderit reprehenderit culpa duis. In elit exercitation pariatur proident deserunt dolor sit et ad voluptate reprehenderit nisi. Quis eiusmod elit deserunt sint laboris dolore occaecat occaecat culpa voluptate deserunt exercitation in reprehenderit. Excepteur reprehenderit ut nisi deserunt eu occaecat. Minim nulla sit pariatur enim occaecat. Lorem velit in enim eiusmod. Cupidatat non veniam amet tempor irure ad do non in pariatur in. Wow",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Consectetur aliquip occaecat laborum Lorem laboris. Officia dolore do velit commodo est. Velit nostrud commodo incididunt sit ad quis Lorem enim et ipsum veniam sunt duis tempor. Qui aute non culpa elit magna commodo nisi. Proident fugiat irure minim sit.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Qui cupidatat Lorem nisi dolor duis sint aliquip. Duis sunt do voluptate ut proident qui anim et magna quis nulla ad. Laborum laborum voluptate et excepteur ullamco mollit duis veniam mollit. Amet sint nulla exercitation commodo nulla ipsum quis laboris consequat irure. Aute ex mollit ad est eiusmod fugiat fugiat voluptate proident.",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya Anim id cillum consectetur Lorem nostrud mollit mollit cillum culpa. Adipisicing deserunt nostrud elit laboris dolore elit eiusmod velit id. Deserunt aliquip quis et sit culpa eiusmod adipisicing mollit fugiat aliqua.?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Id nulla est est fugiat mollit incididunt proident id mollit officia deserunt cupidatat nulla anim. Fugiat mollit excepteur commodo dolor mollit aute laborum dolor dolor incididunt magna dolore. Quis nulla velit eu irure consectetur labore proident sint cupidatat cillum consequat ea irure. Quis labore do aliquip culpa commodo culpa. In excepteur est pariatur in et consequat aliqua ea elit duis reprehenderit. Do veniam laboris esse Lorem nulla sunt velit commodo aliquip elit fugiat sunt dolor eu.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise ReNisi excepteur proident consequat culpa aliquip nulla nulla sunt tempor dolore ipsum exercitation. Ullamco cupidatat duis duis laborum nostrud. Nostrud et reprehenderit ex consectetur consectetur est eiusmod aliquip id consequat amet.ply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koId occaecat aute et aliquip mollit. Voluptate velit eiusmod sunt irure qui sunt magna nulla tempor laborum consequat in aliquip non. Ex anim eiusmod minim aliqua. Quis eiusmod sit incididunt tempor. Laboris in excepteur anim occaecat cillum excepteur pariatur. Commodo ut aliquip nisi in duis.i kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post, WowSint minim occaecat dolor velit aliqua tempor elit eiusmod exercitation sint dolore. Cupidatat ullamco officia veniam nulla aute anim labore mollit id et. Esse fugiat ipsum anim aliqua adipisicing non dolor minim cupidatat est minim.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, WoCommodo quis elit aute voluptate aute est ut. Ut fugiat adipisicing amet sunt magna anim excepteur enim. Nostrud magna nostrud nulla commodo et occaecat elit ipsum ullamco Lorem dolore consectetur officia fugiat.w",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nMinim officia eiusmod elit quis nostrud esse commodo esse culpa cupidatat. Cillum non amet magna sunt id reprehenderit non quis duis. Exercitation tempor id duis exercitation ipsum in esse occaecat et consectetur adipisicing commodo voluptate. Anim anim nostrud irure nostrud magna ipsum qui consectetur esse dolor. Consequat elit incididunt officia dolor et nisi sit incididunt.hi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post,Ullamco ea magna culpa elit minim velit incididunt reprehenderit reprehenderit culpa duis. In elit exercitation pariatur proident deserunt dolor sit et ad voluptate reprehenderit nisi. Quis eiusmod elit deserunt sint laboris dolore occaecat occaecat culpa voluptate deserunt exercitation in reprehenderit. Excepteur reprehenderit ut nisi deserunt eu occaecat. Minim nulla sit pariatur enim occaecat. Lorem velit in enim eiusmod. Cupidatat non veniam amet tempor irure ad do non in pariatur in. Wow",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Consectetur aliquip occaecat laborum Lorem laboris. Officia dolore do velit commodo est. Velit nostrud commodo incididunt sit ad quis Lorem enim et ipsum veniam sunt duis tempor. Qui aute non culpa elit magna commodo nisi. Proident fugiat irure minim sit.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Qui cupidatat Lorem nisi dolor duis sint aliquip. Duis sunt do voluptate ut proident qui anim et magna quis nulla ad. Laborum laborum voluptate et excepteur ullamco mollit duis veniam mollit. Amet sint nulla exercitation commodo nulla ipsum quis laboris consequat irure. Aute ex mollit ad est eiusmod fugiat fugiat voluptate proident.",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya Anim id cillum consectetur Lorem nostrud mollit mollit cillum culpa. Adipisicing deserunt nostrud elit laboris dolore elit eiusmod velit id. Deserunt aliquip quis et sit culpa eiusmod adipisicing mollit fugiat aliqua.?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Id nulla est est fugiat mollit incididunt proident id mollit officia deserunt cupidatat nulla anim. Fugiat mollit excepteur commodo dolor mollit aute laborum dolor dolor incididunt magna dolore. Quis nulla velit eu irure consectetur labore proident sint cupidatat cillum consequat ea irure. Quis labore do aliquip culpa commodo culpa. In excepteur est pariatur in et consequat aliqua ea elit duis reprehenderit. Do veniam laboris esse Lorem nulla sunt velit commodo aliquip elit fugiat sunt dolor eu.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise ReNisi excepteur proident consequat culpa aliquip nulla nulla sunt tempor dolore ipsum exercitation. Ullamco cupidatat duis duis laborum nostrud. Nostrud et reprehenderit ex consectetur consectetur est eiusmod aliquip id consequat amet.ply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koId occaecat aute et aliquip mollit. Voluptate velit eiusmod sunt irure qui sunt magna nulla tempor laborum consequat in aliquip non. Ex anim eiusmod minim aliqua. Quis eiusmod sit incididunt tempor. Laboris in excepteur anim occaecat cillum excepteur pariatur. Commodo ut aliquip nisi in duis.i kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post, WowSint minim occaecat dolor velit aliqua tempor elit eiusmod exercitation sint dolore. Cupidatat ullamco officia veniam nulla aute anim labore mollit id et. Esse fugiat ipsum anim aliqua adipisicing non dolor minim cupidatat est minim.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, WoCommodo quis elit aute voluptate aute est ut. Ut fugiat adipisicing amet sunt magna anim excepteur enim. Nostrud magna nostrud nulla commodo et occaecat elit ipsum ullamco Lorem dolore consectetur officia fugiat.w",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nMinim officia eiusmod elit quis nostrud esse commodo esse culpa cupidatat. Cillum non amet magna sunt id reprehenderit non quis duis. Exercitation tempor id duis exercitation ipsum in esse occaecat et consectetur adipisicing commodo voluptate. Anim anim nostrud irure nostrud magna ipsum qui consectetur esse dolor. Consequat elit incididunt officia dolor et nisi sit incididunt.hi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post,Ullamco ea magna culpa elit minim velit incididunt reprehenderit reprehenderit culpa duis. In elit exercitation pariatur proident deserunt dolor sit et ad voluptate reprehenderit nisi. Quis eiusmod elit deserunt sint laboris dolore occaecat occaecat culpa voluptate deserunt exercitation in reprehenderit. Excepteur reprehenderit ut nisi deserunt eu occaecat. Minim nulla sit pariatur enim occaecat. Lorem velit in enim eiusmod. Cupidatat non veniam amet tempor irure ad do non in pariatur in. Wow",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Consectetur aliquip occaecat laborum Lorem laboris. Officia dolore do velit commodo est. Velit nostrud commodo incididunt sit ad quis Lorem enim et ipsum veniam sunt duis tempor. Qui aute non culpa elit magna commodo nisi. Proident fugiat irure minim sit.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Qui cupidatat Lorem nisi dolor duis sint aliquip. Duis sunt do voluptate ut proident qui anim et magna quis nulla ad. Laborum laborum voluptate et excepteur ullamco mollit duis veniam mollit. Amet sint nulla exercitation commodo nulla ipsum quis laboris consequat irure. Aute ex mollit ad est eiusmod fugiat fugiat voluptate proident.",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya Anim id cillum consectetur Lorem nostrud mollit mollit cillum culpa. Adipisicing deserunt nostrud elit laboris dolore elit eiusmod velit id. Deserunt aliquip quis et sit culpa eiusmod adipisicing mollit fugiat aliqua.?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Id nulla est est fugiat mollit incididunt proident id mollit officia deserunt cupidatat nulla anim. Fugiat mollit excepteur commodo dolor mollit aute laborum dolor dolor incididunt magna dolore. Quis nulla velit eu irure consectetur labore proident sint cupidatat cillum consequat ea irure. Quis labore do aliquip culpa commodo culpa. In excepteur est pariatur in et consequat aliqua ea elit duis reprehenderit. Do veniam laboris esse Lorem nulla sunt velit commodo aliquip elit fugiat sunt dolor eu.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise ReNisi excepteur proident consequat culpa aliquip nulla nulla sunt tempor dolore ipsum exercitation. Ullamco cupidatat duis duis laborum nostrud. Nostrud et reprehenderit ex consectetur consectetur est eiusmod aliquip id consequat amet.ply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koId occaecat aute et aliquip mollit. Voluptate velit eiusmod sunt irure qui sunt magna nulla tempor laborum consequat in aliquip non. Ex anim eiusmod minim aliqua. Quis eiusmod sit incididunt tempor. Laboris in excepteur anim occaecat cillum excepteur pariatur. Commodo ut aliquip nisi in duis.i kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post, WowSint minim occaecat dolor velit aliqua tempor elit eiusmod exercitation sint dolore. Cupidatat ullamco officia veniam nulla aute anim labore mollit id et. Esse fugiat ipsum anim aliqua adipisicing non dolor minim cupidatat est minim.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, WoCommodo quis elit aute voluptate aute est ut. Ut fugiat adipisicing amet sunt magna anim excepteur enim. Nostrud magna nostrud nulla commodo et occaecat elit ipsum ullamco Lorem dolore consectetur officia fugiat.w",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nMinim officia eiusmod elit quis nostrud esse commodo esse culpa cupidatat. Cillum non amet magna sunt id reprehenderit non quis duis. Exercitation tempor id duis exercitation ipsum in esse occaecat et consectetur adipisicing commodo voluptate. Anim anim nostrud irure nostrud magna ipsum qui consectetur esse dolor. Consequat elit incididunt officia dolor et nisi sit incididunt.hi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post,Ullamco ea magna culpa elit minim velit incididunt reprehenderit reprehenderit culpa duis. In elit exercitation pariatur proident deserunt dolor sit et ad voluptate reprehenderit nisi. Quis eiusmod elit deserunt sint laboris dolore occaecat occaecat culpa voluptate deserunt exercitation in reprehenderit. Excepteur reprehenderit ut nisi deserunt eu occaecat. Minim nulla sit pariatur enim occaecat. Lorem velit in enim eiusmod. Cupidatat non veniam amet tempor irure ad do non in pariatur in. Wow",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Consectetur aliquip occaecat laborum Lorem laboris. Officia dolore do velit commodo est. Velit nostrud commodo incididunt sit ad quis Lorem enim et ipsum veniam sunt duis tempor. Qui aute non culpa elit magna commodo nisi. Proident fugiat irure minim sit.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Qui cupidatat Lorem nisi dolor duis sint aliquip. Duis sunt do voluptate ut proident qui anim et magna quis nulla ad. Laborum laborum voluptate et excepteur ullamco mollit duis veniam mollit. Amet sint nulla exercitation commodo nulla ipsum quis laboris consequat irure. Aute ex mollit ad est eiusmod fugiat fugiat voluptate proident.",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya Anim id cillum consectetur Lorem nostrud mollit mollit cillum culpa. Adipisicing deserunt nostrud elit laboris dolore elit eiusmod velit id. Deserunt aliquip quis et sit culpa eiusmod adipisicing mollit fugiat aliqua.?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Id nulla est est fugiat mollit incididunt proident id mollit officia deserunt cupidatat nulla anim. Fugiat mollit excepteur commodo dolor mollit aute laborum dolor dolor incididunt magna dolore. Quis nulla velit eu irure consectetur labore proident sint cupidatat cillum consequat ea irure. Quis labore do aliquip culpa commodo culpa. In excepteur est pariatur in et consequat aliqua ea elit duis reprehenderit. Do veniam laboris esse Lorem nulla sunt velit commodo aliquip elit fugiat sunt dolor eu.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise ReNisi excepteur proident consequat culpa aliquip nulla nulla sunt tempor dolore ipsum exercitation. Ullamco cupidatat duis duis laborum nostrud. Nostrud et reprehenderit ex consectetur consectetur est eiusmod aliquip id consequat amet.ply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koId occaecat aute et aliquip mollit. Voluptate velit eiusmod sunt irure qui sunt magna nulla tempor laborum consequat in aliquip non. Ex anim eiusmod minim aliqua. Quis eiusmod sit incididunt tempor. Laboris in excepteur anim occaecat cillum excepteur pariatur. Commodo ut aliquip nisi in duis.i kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post, WowSint minim occaecat dolor velit aliqua tempor elit eiusmod exercitation sint dolore. Cupidatat ullamco officia veniam nulla aute anim labore mollit id et. Esse fugiat ipsum anim aliqua adipisicing non dolor minim cupidatat est minim.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, WoCommodo quis elit aute voluptate aute est ut. Ut fugiat adipisicing amet sunt magna anim excepteur enim. Nostrud magna nostrud nulla commodo et occaecat elit ipsum ullamco Lorem dolore consectetur officia fugiat.w",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nMinim officia eiusmod elit quis nostrud esse commodo esse culpa cupidatat. Cillum non amet magna sunt id reprehenderit non quis duis. Exercitation tempor id duis exercitation ipsum in esse occaecat et consectetur adipisicing commodo voluptate. Anim anim nostrud irure nostrud magna ipsum qui consectetur esse dolor. Consequat elit incididunt officia dolor et nisi sit incididunt.hi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post,Ullamco ea magna culpa elit minim velit incididunt reprehenderit reprehenderit culpa duis. In elit exercitation pariatur proident deserunt dolor sit et ad voluptate reprehenderit nisi. Quis eiusmod elit deserunt sint laboris dolore occaecat occaecat culpa voluptate deserunt exercitation in reprehenderit. Excepteur reprehenderit ut nisi deserunt eu occaecat. Minim nulla sit pariatur enim occaecat. Lorem velit in enim eiusmod. Cupidatat non veniam amet tempor irure ad do non in pariatur in. Wow",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Consectetur aliquip occaecat laborum Lorem laboris. Officia dolore do velit commodo est. Velit nostrud commodo incididunt sit ad quis Lorem enim et ipsum veniam sunt duis tempor. Qui aute non culpa elit magna commodo nisi. Proident fugiat irure minim sit.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Qui cupidatat Lorem nisi dolor duis sint aliquip. Duis sunt do voluptate ut proident qui anim et magna quis nulla ad. Laborum laborum voluptate et excepteur ullamco mollit duis veniam mollit. Amet sint nulla exercitation commodo nulla ipsum quis laboris consequat irure. Aute ex mollit ad est eiusmod fugiat fugiat voluptate proident.",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya Anim id cillum consectetur Lorem nostrud mollit mollit cillum culpa. Adipisicing deserunt nostrud elit laboris dolore elit eiusmod velit id. Deserunt aliquip quis et sit culpa eiusmod adipisicing mollit fugiat aliqua.?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Id nulla est est fugiat mollit incididunt proident id mollit officia deserunt cupidatat nulla anim. Fugiat mollit excepteur commodo dolor mollit aute laborum dolor dolor incididunt magna dolore. Quis nulla velit eu irure consectetur labore proident sint cupidatat cillum consequat ea irure. Quis labore do aliquip culpa commodo culpa. In excepteur est pariatur in et consequat aliqua ea elit duis reprehenderit. Do veniam laboris esse Lorem nulla sunt velit commodo aliquip elit fugiat sunt dolor eu.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise ReNisi excepteur proident consequat culpa aliquip nulla nulla sunt tempor dolore ipsum exercitation. Ullamco cupidatat duis duis laborum nostrud. Nostrud et reprehenderit ex consectetur consectetur est eiusmod aliquip id consequat amet.ply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koId occaecat aute et aliquip mollit. Voluptate velit eiusmod sunt irure qui sunt magna nulla tempor laborum consequat in aliquip non. Ex anim eiusmod minim aliqua. Quis eiusmod sit incididunt tempor. Laboris in excepteur anim occaecat cillum excepteur pariatur. Commodo ut aliquip nisi in duis.i kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post, WowSint minim occaecat dolor velit aliqua tempor elit eiusmod exercitation sint dolore. Cupidatat ullamco officia veniam nulla aute anim labore mollit id et. Esse fugiat ipsum anim aliqua adipisicing non dolor minim cupidatat est minim.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, WoCommodo quis elit aute voluptate aute est ut. Ut fugiat adipisicing amet sunt magna anim excepteur enim. Nostrud magna nostrud nulla commodo et occaecat elit ipsum ullamco Lorem dolore consectetur officia fugiat.w",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nMinim officia eiusmod elit quis nostrud esse commodo esse culpa cupidatat. Cillum non amet magna sunt id reprehenderit non quis duis. Exercitation tempor id duis exercitation ipsum in esse occaecat et consectetur adipisicing commodo voluptate. Anim anim nostrud irure nostrud magna ipsum qui consectetur esse dolor. Consequat elit incididunt officia dolor et nisi sit incididunt.hi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post,Ullamco ea magna culpa elit minim velit incididunt reprehenderit reprehenderit culpa duis. In elit exercitation pariatur proident deserunt dolor sit et ad voluptate reprehenderit nisi. Quis eiusmod elit deserunt sint laboris dolore occaecat occaecat culpa voluptate deserunt exercitation in reprehenderit. Excepteur reprehenderit ut nisi deserunt eu occaecat. Minim nulla sit pariatur enim occaecat. Lorem velit in enim eiusmod. Cupidatat non veniam amet tempor irure ad do non in pariatur in. Wow",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Consectetur aliquip occaecat laborum Lorem laboris. Officia dolore do velit commodo est. Velit nostrud commodo incididunt sit ad quis Lorem enim et ipsum veniam sunt duis tempor. Qui aute non culpa elit magna commodo nisi. Proident fugiat irure minim sit.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Qui cupidatat Lorem nisi dolor duis sint aliquip. Duis sunt do voluptate ut proident qui anim et magna quis nulla ad. Laborum laborum voluptate et excepteur ullamco mollit duis veniam mollit. Amet sint nulla exercitation commodo nulla ipsum quis laboris consequat irure. Aute ex mollit ad est eiusmod fugiat fugiat voluptate proident.",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya Anim id cillum consectetur Lorem nostrud mollit mollit cillum culpa. Adipisicing deserunt nostrud elit laboris dolore elit eiusmod velit id. Deserunt aliquip quis et sit culpa eiusmod adipisicing mollit fugiat aliqua.?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Id nulla est est fugiat mollit incididunt proident id mollit officia deserunt cupidatat nulla anim. Fugiat mollit excepteur commodo dolor mollit aute laborum dolor dolor incididunt magna dolore. Quis nulla velit eu irure consectetur labore proident sint cupidatat cillum consequat ea irure. Quis labore do aliquip culpa commodo culpa. In excepteur est pariatur in et consequat aliqua ea elit duis reprehenderit. Do veniam laboris esse Lorem nulla sunt velit commodo aliquip elit fugiat sunt dolor eu.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise ReNisi excepteur proident consequat culpa aliquip nulla nulla sunt tempor dolore ipsum exercitation. Ullamco cupidatat duis duis laborum nostrud. Nostrud et reprehenderit ex consectetur consectetur est eiusmod aliquip id consequat amet.ply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koId occaecat aute et aliquip mollit. Voluptate velit eiusmod sunt irure qui sunt magna nulla tempor laborum consequat in aliquip non. Ex anim eiusmod minim aliqua. Quis eiusmod sit incididunt tempor. Laboris in excepteur anim occaecat cillum excepteur pariatur. Commodo ut aliquip nisi in duis.i kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post, WowSint minim occaecat dolor velit aliqua tempor elit eiusmod exercitation sint dolore. Cupidatat ullamco officia veniam nulla aute anim labore mollit id et. Esse fugiat ipsum anim aliqua adipisicing non dolor minim cupidatat est minim.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, WoCommodo quis elit aute voluptate aute est ut. Ut fugiat adipisicing amet sunt magna anim excepteur enim. Nostrud magna nostrud nulla commodo et occaecat elit ipsum ullamco Lorem dolore consectetur officia fugiat.w",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nMinim officia eiusmod elit quis nostrud esse commodo esse culpa cupidatat. Cillum non amet magna sunt id reprehenderit non quis duis. Exercitation tempor id duis exercitation ipsum in esse occaecat et consectetur adipisicing commodo voluptate. Anim anim nostrud irure nostrud magna ipsum qui consectetur esse dolor. Consequat elit incididunt officia dolor et nisi sit incididunt.hi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post,Ullamco ea magna culpa elit minim velit incididunt reprehenderit reprehenderit culpa duis. In elit exercitation pariatur proident deserunt dolor sit et ad voluptate reprehenderit nisi. Quis eiusmod elit deserunt sint laboris dolore occaecat occaecat culpa voluptate deserunt exercitation in reprehenderit. Excepteur reprehenderit ut nisi deserunt eu occaecat. Minim nulla sit pariatur enim occaecat. Lorem velit in enim eiusmod. Cupidatat non veniam amet tempor irure ad do non in pariatur in. Wow",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Consectetur aliquip occaecat laborum Lorem laboris. Officia dolore do velit commodo est. Velit nostrud commodo incididunt sit ad quis Lorem enim et ipsum veniam sunt duis tempor. Qui aute non culpa elit magna commodo nisi. Proident fugiat irure minim sit.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, Qui cupidatat Lorem nisi dolor duis sint aliquip. Duis sunt do voluptate ut proident qui anim et magna quis nulla ad. Laborum laborum voluptate et excepteur ullamco mollit duis veniam mollit. Amet sint nulla exercitation commodo nulla ipsum quis laboris consequat irure. Aute ex mollit ad est eiusmod fugiat fugiat voluptate proident.",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nhi hai kya Anim id cillum consectetur Lorem nostrud mollit mollit cillum culpa. Adipisicing deserunt nostrud elit laboris dolore elit eiusmod velit id. Deserunt aliquip quis et sit culpa eiusmod adipisicing mollit fugiat aliqua.?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Id nulla est est fugiat mollit incididunt proident id mollit officia deserunt cupidatat nulla anim. Fugiat mollit excepteur commodo dolor mollit aute laborum dolor dolor incididunt magna dolore. Quis nulla velit eu irure consectetur labore proident sint cupidatat cillum consequat ea irure. Quis labore do aliquip culpa commodo culpa. In excepteur est pariatur in et consequat aliqua ea elit duis reprehenderit. Do veniam laboris esse Lorem nulla sunt velit commodo aliquip elit fugiat sunt dolor eu.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise ReNisi excepteur proident consequat culpa aliquip nulla nulla sunt tempor dolore ipsum exercitation. Ullamco cupidatat duis duis laborum nostrud. Nostrud et reprehenderit ex consectetur consectetur est eiusmod aliquip id consequat amet.ply, Wow",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koId occaecat aute et aliquip mollit. Voluptate velit eiusmod sunt irure qui sunt magna nulla tempor laborum consequat in aliquip non. Ex anim eiusmod minim aliqua. Quis eiusmod sit incididunt tempor. Laboris in excepteur anim occaecat cillum excepteur pariatur. Commodo ut aliquip nisi in duis.i kam dhanda nhi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    },
    {
        author_name: 'Bikas',
        author_id: "@ixbxe",
        comment: "Bery naise post, WowSint minim occaecat dolor velit aliqua tempor elit eiusmod exercitation sint dolore. Cupidatat ullamco officia veniam nulla aute anim labore mollit id et. Esse fugiat ipsum anim aliqua adipisicing non dolor minim cupidatat est minim.",
        likes: 21,
        replies: [
            {
                replyToPersionId:"@ixbxe",
                comment: "Bery naise Reply, WoCommodo quis elit aute voluptate aute est ut. Ut fugiat adipisicing amet sunt magna anim excepteur enim. Nostrud magna nostrud nulla commodo et occaecat elit ipsum ullamco Lorem dolore consectetur officia fugiat.w",
                author_name: 'Bikas',
                author_id: "@tugWar",
                likes: 2,
            },
            {
                replyToPersionId:"@tugWar",
                comment: "Lodu aur koi kam dhanda nMinim officia eiusmod elit quis nostrud esse commodo esse culpa cupidatat. Cillum non amet magna sunt id reprehenderit non quis duis. Exercitation tempor id duis exercitation ipsum in esse occaecat et consectetur adipisicing commodo voluptate. Anim anim nostrud irure nostrud magna ipsum qui consectetur esse dolor. Consequat elit incididunt officia dolor et nisi sit incididunt.hi hai kya ?",
                author_name: 'ramesh',
                author_id: "@ramesh872",
                likes: 987,
            }

        ]
    }
]