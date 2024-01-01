import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	TextInput,
} from 'react-native';

import { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	actions,
	RichEditor,
	RichToolbar,
} from 'react-native-pell-rich-editor';

const Notes = () => {
	const richText = useRef();
	const scrollRef = useRef();

	const [descHTML, setDescHTML] = useState('');
	const [title, setTitle] = useState('');

	const richTextHandler = (descriptionText) => {
		if (descriptionText) {
			setDescHTML(descriptionText);
		} else {
			setDescHTML('');
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />

			<View style={styles.richTextContainer}>
				<View style={{ display: 'flex', alignItems: 'center' }}>
					<TouchableOpacity
						style={{
							width: '85%',
							backgroundColor: '#427dde',
							borderRadius: 10,
							padding: 10,
						}}
					>
						<Text style={{ textAlign: 'center', color: '#e6e6e6' }}>
							Save Changes
						</Text>
					</TouchableOpacity>
				</View>
				<KeyboardAvoidingView
					keyboardVerticalOffset={100}
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={{ flex: 1 }}
				>
					<ScrollView ref={scrollRef} style={styles.noteMain}>
						<RichEditor
							placeholder="Type here ...."
							initialContentHTML={descHTML}
							ref={richText}
							onChange={richTextHandler}
							initialFocus
							onCursorPosition={(p) =>
								scrollRef.current.scrollTo({
									y: p + 30,
									animated: true,
								})
							}
						/>
					</ScrollView>
				</KeyboardAvoidingView>

				<RichToolbar
					editor={richText}
					actions={[
						actions.setBold,
						actions.setItalic,
						actions.setUnderline,
						actions.setStrikethrough,
						actions.insertBulletsList,
						actions.insertOrderedList,
						actions.undo,
						actions.redo,
						actions.keyboard,
					]}
				/>

				<View
					style={{
						paddingHorizontal: 20,
						paddingVertical: 10,
						marginTop: 10,
						marginBottom: 10,
						backgroundColor: '#e6e6e6',
					}}
				>
					<TextInput
						placeholder="Enter Title here.."
						placeholderTextColor={'gray'}
						style={{ fontSize: 18, paddingVertical: 10 }}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Notes;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingBottom: 10,
	},
	noteMain: {
		backgroundColor: 'white',
		paddingHorizontal: 10,
	},

	richTextContainer: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column-reverse',
		marginBottom: 10,
	},
});
