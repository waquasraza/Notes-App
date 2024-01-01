import React, { useState, useRef } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	StatusBar,
	ScrollView,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import { Menu, AlertDialog, Button, Pressable } from 'native-base';
import {
	FontAwesome5,
	Feather,
	MaterialCommunityIcons,
} from '@expo/vector-icons';

const Home = ({ navigation }) => {
	const [isOpen, setIsOpen] = useState(false);
	const onClose = () => {
		setIsOpen(false);
	};

	const cancelRef = useRef(null);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<ScrollView style={styles.main}>
				{/* Header */}
				<View style={styles.header}>
					<Text style={styles.headerText}>My Notes</Text>
				</View>

				{/* SubHeader */}
				<View style={styles.subHeader}>
					<Menu
						placement="bottom left"
						w="190"
						trigger={(triggerProps) => {
							return (
								<Pressable
									accessibilityLabel="More options menu"
									{...triggerProps}
								>
									<MaterialCommunityIcons
										name="dots-vertical"
										size={24}
										color="#404040"
									/>
								</Pressable>
							);
						}}
					>
						<Menu.Item onPress={() => setIsOpen(!isOpen)}>
							Delete All
						</Menu.Item>
					</Menu>

					<AlertDialog
						leastDestructiveRef={cancelRef}
						isOpen={isOpen}
						onClose={onClose}
					>
						<AlertDialog.Content>
							<AlertDialog.CloseButton />
							<AlertDialog.Header>
								Delete All Notes
							</AlertDialog.Header>
							<AlertDialog.Body>
								<Text style={{ color: '#404040' }}>
									This will remove all your notes from this
									app This action cannot be undone.
								</Text>
							</AlertDialog.Body>
							<AlertDialog.Footer>
								<Button.Group space={2}>
									<Button
										variant={'unstyled'}
										colorScheme={'coolGray'}
										onPress={onClose}
										ref={cancelRef}
									>
										Cancel
									</Button>
									<Button colorScheme={'danger'}>
										Delete
									</Button>
								</Button.Group>
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog>
				</View>

				<View style={styles.noteContainer}>
					<View style={styles.noteHeader}>
						<Text style={styles.noteDate}>01/01/24</Text>
						<Text style={styles.noteView}>View All</Text>
					</View>

					<TouchableOpacity>
						<View style={styles.noteCardWrapper}>
							<View style={styles.noteLeftContent}>
								<View
									style={{
										backgroundColor: '#427dde',
										height: 55,
										width: 5,
										borderRadius: 10,
									}}
								></View>
							</View>

							<View style={styles.noteMiddleContent}>
								<Text style={styles.topText}>
									Festival Note
								</Text>
								<Text style={styles.middleText}>
									This is the note for the festival
								</Text>
								<Text style={styles.bottomText}>2:35pm</Text>
							</View>

							<TouchableOpacity style={styles.noteRightContent}>
								<FontAwesome5
									name="trash"
									size={16}
									color="#404040"
								/>
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>

			<View style={styles.addButtonView}>
				<TouchableOpacity
					style={styles.addButton}
					onPress={() =>
						navigation.navigate('Notes', { noteId: null })
					}
				>
					<Feather name="plus" size={20} color="white" />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
	},

	main: {
		flex: 1,
		paddingTop: 30,
		paddingHorizontal: 15,
	},

	header: {
		alignItems: 'center',
		marginBottom: 40,
	},

	headerText: {
		fontSize: 28,
	},

	subHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		marginHorizontal: 15,
	},

	noteContainer: {
		paddingBottom: 30,
	},

	noteHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		marginBottom: 10,
	},

	noteDate: {
		fontSize: 16,
		color: '#404040',
	},

	noteView: {
		fontSize: 16,
		color: '#404040',
	},

	noteCardWrapper: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 10,
		shadowColor: '#404040',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 1,
		marginBottom: 10,
	},

	noteLeftContent: {
		flex: 0.1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	noteMiddleContent: {
		flex: 0.8,
	},

	noteRightContent: {
		flex: 0.1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},

	topText: {
		color: '#404040',
		marginBottom: 6,
		fontSize: 16,
	},

	middleText: {
		fontSize: 12,
		color: '#9f9f9f',
		marginBottom: 10,
	},

	bottomText: {
		color: '#9f9f9f',
		fontSize: 12,
	},

	addButtonView: {
		marginTop: 10,
		marginBottom: 10,
		position: 'relative',
		alignItems: 'flex-end',
		paddingHorizontal: 20,
	},

	addButton: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		width: 50,
		backgroundColor: '#427dde',
		padding: 15,
		borderRadius: '50%',
	},
});
