import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../config/app.variables';


export default function BottomTabBar({ state, descriptors, navigation }: any) {

    const ChangeScr = (value: string) => {
        navigation.navigate(value);
    }
    const highlight = theme.accent


    return (
        <View style={styles.main}>

            <TouchableOpacity activeOpacity={1} onPress={() => { ChangeScr(state.routeNames[0]) }} style={styles.child}>
                <Text style={[styles.txt, { color: state.index === 0 ? highlight : 'white' }]}>
                    {state.routeNames[0]}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => { ChangeScr(state.routeNames[1]) }} style={styles.child}>
                <Text style={[styles.txt, { color: state.index === 1 ? highlight : 'white' }]}>
                    {state.routeNames[1]}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => { ChangeScr(state.routeNames[2]) }} style={styles.child}>
                <Text style={[styles.txt, { color: state.index === 2 ? highlight : 'white' }]}>
                    {state.routeNames[2]}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => { ChangeScr(state.routeNames[3]) }} style={styles.child}>
                <Text style={[styles.txt, { color: state.index === 3 ? highlight : 'white' }]}>
                    {state.routeNames[3]}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} onPress={() => { ChangeScr(state.routeNames[4]) }} style={styles.child}>
                <Text style={[styles.txt, { color: state.index === 4 ? highlight : 'white' }]}>
                    {/* {state.routeNames[4]} */}
                    Acco
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        elevation: 8,
        backgroundColor: theme.secondary,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        position: 'absolute',
        bottom: 10,
        left: '2.5%',
        borderRadius: 6
    },
    child: {
        flex: 1,
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontFamily: "Poppins-Bold",
        color: "white",
        fontSize: 14,
    }
})