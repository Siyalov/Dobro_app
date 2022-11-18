import { useState, useEffect } from 'react';
import { ScrollView } from "react-native";
import { Text, Button } from '@rneui/themed';
import RequestPreview from "../../components/RequestPreview";
import InputField from "../../components/InputField";
import { api } from "../../components/api";

let requests = [];

export default function UserRequests({ navigation, route }) {
    const [findState, setFindState] = useState('');
    const [filteredRequests, setFilteredRequests] = useState(requests);

    async function init() {
        const data = await api.get('requests', []);
        requests = data;
        setFilteredRequests(requests);

        // on route.params.newRequest update...
        if (route.params?.newRequest?.name && route.params?.newRequest?.helpRequest) {
            // add
            requests.push(route.params.newRequest);
            // create new array from old
            setFilteredRequests([...requests]);
            // prevent duplicates
            route.params.newRequest = null;
            // save
            // storeRequests();
            api.save('requests');
            onFind(findState);
        }
    }

    useEffect(() => {
        init();
    }, []);

    // search
    const onFind = (e) => {
        setFindState(e);
        setFilteredRequests(
            requests.filter((req) => {
                return (
                    req.name.toLowerCase().includes(e.toLowerCase()) ||
                    req.phone.toLowerCase().includes(e.toLowerCase()) ||
                    req.helpRequest.toLowerCase().includes(e.toLowerCase())
                );
            })
        );
    };

    // https://reactnavigation.org/docs/params/
    return (
        <>
            <Text h2 style={{ textAlign: 'center' }}>Ваши заявки</Text>
            <ScrollView>

                <InputField
                    onChangeValue={onFind}
                    value={findState}
                    placeholder={"Поиск"}
                />

                {
                    filteredRequests.map((request, i) => <RequestPreview key={i} request={request} />)
                }
                {/* <Text>Обратиться за помощью</Text> */}
                <Button
                    title={"Домой"}
                    radius={'md'}
                    style={{ padding: 16 }}
                    onPress={() => navigation.navigate('home')}
                />
            </ScrollView>
        </>
    );
}

