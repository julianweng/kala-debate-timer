import {Pressable, Text, View} from "react-native"
import React from 'react';
import {speechButtons as style} from "../styles"

export function NextSpeech(props) {
    return(
        <View>
            <Pressable
                onPress={props.nextSpeech} // when clicked, move to the next speech
                style={({pressed}) => [
                    {
                        backgroundColor: (pressed ? 'lime' : 'deepskyblue')
                    },
                    style.wrapperCustom
                ]}
            >
                <Text style={style.innerText}>Next Speech</Text>
            </Pressable>
        </View>
    )
}