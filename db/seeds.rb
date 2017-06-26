# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Program.create(title: 'The Way of All the Earth', subtitle: 'This program is based on a spiritual classic.', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.')
# Program.create(title: 'Reasons of the Heart', subtitle: 'This program is based on a spiritual classic.', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.')
# Program.create(title: 'Addiction and Grace', subtitle: 'This program is based on a spiritual classic.', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.')
# Program.create(title: 'Whole Child, Whole Parent', subtitle: 'This program is based on a spiritual classic.', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.')
# Program.create(title: 'The Road Less Traveled', subtitle: 'This program is based on a spiritual classic.', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.')
# Program.create(title: 'The Red Tent', subtitle: 'This program is based on a spiritual classic.', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.')
# Program.create(title: 'She Who Is', subtitle: 'This program is based on a spiritual classic.', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.')
# Program.create(title: 'Theology of Liberation', subtitle: 'This program is based on a spiritual classic.', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.')
# Program.create(title: 'The Idea of a University', subtitle: 'This program is based on a spiritual classic.', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.')
# Program.create(title: 'Spiritual Poverty', subtitle: 'This program is based on a spiritual classic.', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.')
# Program.create(title: 'Second Naivete', subtitle: 'This program is based on a spiritual classic.', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.')

# Program.create(title: 'To Bless The Space Between Us', subtitle: 'This program is based on sweet poems by John ODonohue', explanation: 'Pop-up typewriter meggings, vaporware cardigan marfa health goth selvage neutra green juice. Kinfolk edison bulb shoreditch, leggings helvetica crucifix semiotics gluten-free vape artisan mustache fanny pack whatever.', premium: false, teacher_id: Teacher.find_by(first_name: 'Casey').id)
# Track.create(title: 'For Longing', duration: [9, 10, 11].sample, link: 'https://s3-us-west-2.amazonaws.com/innerlfie/Casey/ReadingPoems/For+Longing_john+Odonohue.m4a', program_id: Program.last.id)

# Track.create(title: 'For Presence', duration: "1", link: 'https://s3-us-west-2.amazonaws.com/innerlfie/Casey/ReadingPoems/For+Presence+_+John+O+Don.m4a', program_id: Program.last.id)
# Track.create(title: 'For Friendship', duration: "1", link: 'https://s3-us-west-2.amazonaws.com/innerlfie/Casey/ReadingPoems/For+Friendship_john+O+Don.m4a', program_id: Program.last.id)


# Program.all.each do |program|
#   Track.create(title: program.title+' 1', duration: [9, 10, 11].sample, link: '/1812.m4a', program_id: program.id)
#   Track.create(title: program.title+' 2', duration: [9, 10, 11].sample, link: '/1812.m4a', program_id: program.id)
#   Track.create(title: program.title+' 3', duration: [9, 10, 11].sample, link: '/1812.m4a', program_id: program.id)
#   Track.create(title: program.title+' 4', duration: [9, 10, 11].sample, link: '/1812.m4a', program_id: program.id)
#   Track.create(title: program.title+' 5', duration: [9, 10, 11].sample, link: '/1812.m4a', program_id: program.id)
#   Track.create(title: program.title+' 6', duration: [9, 10, 11].sample, link: '/1812.m4a', program_id: program.id)
#   Track.create(title: program.title+' 7', duration: [9, 10, 11].sample, link: '/1812.m4a', program_id: program.id)
#   Track.create(title: program.title+' 8', duration: [9, 10, 11].sample, link: '/1812.m4a', program_id: program.id)
#   Track.create(title: program.title+' 9', duration: [9, 10, 11].sample, link: '/1812.m4a', program_id: program.id)
#   Track.create(title: program.title+' 10', duration: [9, 10, 11].sample, link: '/1812.m4a', program_id: program.id)
#   Track.create(title: program.title+' 11', duration: [9, 10, 11].sample, link: '/1812.m4a', program_id: program.id)
# end

# Teacher.create(first_name: 'Paul',
#                last_name: 'Mitchell',
#                pic_link: 'https://bucketeer-760d0a32-a78c-4335-9090-9206d2933331.s3.amazonaws.com/5745cf09c2c78a0300cfb1a4',
#                blurb: 'In a cave in the woods, in his deep dark lair, through the long cold winter, sleeps a great brown bear')
