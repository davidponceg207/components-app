import { Text, TextInput, View } from 'react-native';
import { Card } from '../../components/ui/Card';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { useState } from 'react';

export const TextInputScreen = () => {


    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

    return (
        <CustomView margin> 
            <Title safe text="Text Inputs" />

            <Card>
                <TextInput
                    style={ globalStyles.input}
                    placeholder='Name'
                    autoCapitalize='none'
                    autoCorrect = {false}
                    onChangeText={ value => setForm({ ...form, name: value }) }
                />
                <TextInput
                    style={ globalStyles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='words'
                    autoCorrect = {false}
                    onChangeText={ value => setForm({ ...form, email: value }) }
                />
                <TextInput
                    style={ globalStyles.input}
                    placeholder='Teléfono'
                    keyboardType='phone-pad'
                    onChangeText={ value => setForm({ ...form, phone: value }) }
                />
            </Card>

            <View style={{ height: 10 }} />

            <Card>
                <Text>{ JSON.stringify(form, null, 2) }</Text>
            </Card>
        </CustomView>
    )
}