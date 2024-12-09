import { StyleSheet, Text, View } from "react-native";


export default function Header() {
    return (<>
        <View style={styles.wrapper}><Text style={{ fontFamily: 'InterBold', fontSize: 32, textAlign: 'center' }}>SHOPPERS</Text></View>
    </>);
}
const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 16,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4
    }
})
