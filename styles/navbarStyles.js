import { StyleSheet } from 'react-native';

const navabrStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        backgroundColor: "#333",
    },
    group: {
        flexDirection: "row",
        gap: 16,
    },    
    link: {
        color: "#white",
    },
});

export default navabrStyles;