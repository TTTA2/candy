const jsConfig = {

    divisions: [        
        {
            id: "test1",
            name: "test1",
            templates: [

                {
                    id: "test_id_1",
                    name: "test",
                    text: "test1です\nてすと1です"
                },
        
                {
                    id: "test_id_2",
                    name: "test2",
                    text: "test2です\nてすと2です"
                },
        
                {
                    id: "test_id_3",
                    name: "test3",
                    parentId: "test_id_2",
                    text: "test3です\nてすと3です"
                },
        
                {
                    id: "test_id_4",
                    name: "test4",
                    parentId: "test_id_3",
                    text: "test4です\nてすと4です"
                },
        
                {
                    id: "test_id_5",
                    name: "test5",
                    text: "test5です\nてすと5です"
                },
        
                {
                    id: "test_id_6",
                    name: "test6",
                    text: "test6です\nてすと6です"
                },
            ]
        },

        {
            id: "test2",
            name: "test2",
            templates: []
        },
    ]

}