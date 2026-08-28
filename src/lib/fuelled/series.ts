export interface SeriesPart {
	number: number;
	title: string;
	tank: string;
	description: string;
	speaker?: string;
	youtubeUrl: string;
	/** Title/tank confirmed against a real source vs. inferred — flag it in the UI so it's easy to spot and fix. */
	confirmed: boolean;
	/** Cleaned-up transcript paragraphs, if one has been added for this part. */
	transcript?: string[];
}

/**
 * Parts 1-3 title/speaker are confirmed from CityHill Church's own series page
 * (found via search — cityhillchurch.tv itself wasn't fetchable from this
 * environment). Parts 4-6 are inferred by elimination (physical and spiritual
 * are already taken by parts 2-3, so 4-5 are most likely emotional/mental,
 * order unconfirmed) — replace with the real titles when you have them.
 */
export const seriesParts: SeriesPart[] = [
	{
		number: 1,
		title: 'Life To The Full',
		tank: 'Introduction',
		description: 'The four tanks, the greatest commandment, and why we run out of fuel.',
		speaker: 'Steve Wimble',
		youtubeUrl: 'https://www.youtube.com/watch?v=2mDsQuFcuho',
		confirmed: true,
		transcript: [
			"Good morning, everybody — great to have you with us here for week one of our Fuelled series. I'm Steve. I'm married to Jax, and we have the privilege of leading the team here. Welcome to everyone watching online as well.",

			"Before I dive into the message, you were hopefully given one of these workbooks on your way in — they're free of charge, and thank you for your generosity as a church, which enables us to do this. If you're already part of a group, please make sure you don't double up — just take one for yourself, and check your group leader isn't also taking another one for you. If you missed getting one on the way in, our connect team is standing ready to bring one to your chair — just raise your hand.",

			"This workbook is one of the key resources in the series — it has a place for all the content, so please shoot your hand up if you don't have one yet. A huge thank you to the team for all their effort behind the scenes putting this together.",

			"Quick note on parking: after we asked people at the earlier congregation to consider moving to make room for this service, we had a lot of people move to the earlier slot, which created some congestion in the car park last week. We've been working on it — you may have seen the team out there with the sound boards — so thank you in advance for your patience. These are the best kinds of problems to have. And since we are at church, let's not let stress and frustration show in the car park while we work on it.",

			"Let me orientate you through the workbook, especially if you haven't done one of these series with us before. It's a six-week series: six Sunday messages, six midweek videos that happen in life groups, and thirty-six devotional readings. If you turn to page four, you'll see space for today's notes, and each of the six Sundays has a blank page for notes — you can date them. I hope you'll bring a pen and take notes over the next few weeks; there's a lot to learn.",

			"On page five you'll see a page with some missing words — those relate to the midweek videos, and that content is genuinely important to understanding the series. I'll introduce it today, but to really get it you need to watch those videos, which are being shown in around two hundred different groups across our church. If you're not yet part of a group, you'll miss out on a good chunk of the benefit of this series — so stop at one of the connect stations on your way out, or find a friend who's part of a group and ask to join them this week.",

			"If you flip forward to page seventeen, you'll see the devotional readings begin — six per week, with one break day built in to catch up if you miss one, continuing over the six weeks. They're labelled at the top, so if you're here today, tomorrow will be Day One. My encouragement is to read through them. If you're part of our church-wide Bible reading plan, you might like to note the chapters at the bottom of each page; if you're not part of that but would like to read through the Bible for yourself, there are reading plans at the end of the workbook you can copy the chapters from.",

			"When I was at university, I had the privilege of being loaned the family's old car — a real beaten-up thing they'd owned since I was a toddler. The good news was I had a car. The bad news was the fuel gauge didn't work, and neither did the odometer, so you couldn't even track your distance to estimate how much fuel you had left. And as a student, I didn't have money to keep it topped up all the time — so it was a bit of a guessing game as to when it needed filling.",

			"Most of the time it worked out. But one day, on my way to an important test, the car ran out of petrol — engine dead, and I was still about two kilometres from where I needed to be. The good news was that it ran out right at the top of a hill, and from there it was a gentle two-kilometre slope down to a sharp turn into the driveway of the test venue. The bad news was there were three intersections along that stretch, two of them with traffic lights. I prayed hard — I'd like to think it was miraculous — and caught green lights at both. I coasted into a friend's driveway near the bottom, then sprinted the rest of the way and made it just in time.",

			"That's not the ideal way to arrive for something important — but the reason I tell that story is that our metaphor for this series is internal tanks, which is where the name Fuelled comes from. Unlike that car, the tanks God's given us inside actually have working gauges that give us feedback on when they're full and when they're running empty. Some of us just don't look at them very well — I was one of those people, and it led me into a genuinely dark place over a long period of time, which I share more of in this week's midweek video. That's another reason to join a group this week.",

			"Our key verse for the series is Luke 10:27, and I hope that by week six you'll know it by heart: \"Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind.\" Heart, soul, strength, mind. Jesus was answering the question, \"What is the greatest commandment?\" He could simply have said, love the Lord your God with everything you've got — that would have covered it. So why list heart, soul, strength and mind separately? My view is that he wanted us to know that all the different aspects that make up who we are need to be tended to well, so that by looking after ourselves we can love God fully — with all of our spiritual, mental, emotional and physical energy. Those four words roughly map onto the four internal tanks we'll be talking about in this series: physical, mental, emotional and spiritual.",

			"Growing up, I ended up with a fairly low understanding of some of these internal tanks. My spiritual tank was actually my strongest — I grew up in a church family that really loved God — but one issue I had was that in the churches I grew up in, there often seemed to be suspicion attached to talk about feelings or mental health. So the picture I built for myself was: love Jesus with all your heart, suppress your emotions, work your hardest, and just make wise decisions. Wise decisions and loving Jesus are good things — but suppressing anything to do with my emotional tank led me into real difficulty later in life, about seventeen years ago.",

			'Some people grow up on the opposite end of that spectrum — instead of suppressing, the message has been "be your authentic self, whatever you\'re feeling, let the world know, don\'t let anyone limit you." There\'s good truth in both, but taken to the extreme, neither is healthy or biblical. When I come to the Bible and look at the teaching of Jesus, I see this amazing instruction — love God with all your physical, mental, emotional and spiritual energy — and look after yourself so that you can love and glorify him.',

			"Jesus didn't just teach this, he lived it. Spiritually, that's an obvious tick. But what about his emotions? The Bible records that he felt and expressed real emotion — it tells us he wept, that he was sorrowful and troubled, and on another occasion that he was full of joy. He expressed his emotions in healthy ways: when his close friend John the Baptist was executed, he didn't just suppress his grief — he withdrew privately by boat to a solitary place, giving himself room to process loss. What about his mental strength? The way Jesus taught and reasoned with religious leaders shows he didn't rely only on the strength of his miracles — there was good, healthy mental functioning in his life, and his followers would later be taught in Romans 12 to be transformed by the renewing of their minds. And physically, the Bible records that he was hungry, thirsty, that he got tired, and that he slept — he paid attention to his physical energy rather than ignoring it, which is a mistake I've often made myself.",

			"I'm challenged by the life of Jesus, because looking back on my own journey I've so often not stewarded my emotional, mental or physical energy well. I've overworked, gotten too little sleep, made unwise eating decisions. I've often not processed grief and loss well emotionally, and mentally I've let the wrong kinds of thought patterns continue — I've had to let God identify lies I believed about myself and the world, and renew my mind.",

			"For anyone who, like me, grew up nervous about this kind of talk — I want to make an important point early in the series: this isn't about withdrawing into some kind of selfish, self-protecting little bubble to do introspective exercises. We're looking at the internal tanks of our lives so that we can live a life that glorifies God, is purposeful, and follows him — doing what he did. Jesus was not withdrawn into an isolated bubble, and yet he looked after every area of his life well.",

			"This morning I want to look at three things: a promise from Jesus, an invitation from him, and a response I need to make.",

			'The first is a promise — those amazing words, "life to the full." Over the next few weeks you\'ll see a diagram like the one on page five of the workbook, with four tanks — physical, emotional, spiritual and mental energy — that you\'ll fill in at your life group, or you might like to sketch on page four now. The promise comes from John 10:10, where Jesus says: "I have come that they may have life, and have it to the full." I don\'t believe Jesus was only talking about the eternal life that will one day be ours — I believe he was talking about a life where, across all four tanks, we\'re living in the healthy zone rather than the depleted zones.',

			"Think of each of those four tanks as having a top third, a middle third, and a bottom third. When we're living in the healthy top third, it feels like a good place to be — we generally live with more grace and kindness, our minds feel sharper, we're able to think things through and make decisions, and we respond better to tough situations. But when we're living in the depleted middle or bottom third, we're not at our best — we get tired more quickly, our emotions become dysregulated, we feel more irritable and less gracious, and we're overwhelmed more easily. In short, it's not a nice place to be.",

			"Over these six weeks, the videos will ask you to write down where you think each of your four tanks has been sitting — over the last week, or the last year — and it's not always an easy thing to gauge at first. But my hope is that as we go, we'll each start to notice what keeps us in the healthy zone, and what depletes us. Some people are the type who top up their fuel tank the moment it dips below half; others love to play a game with the fuel light and see how far they can push it. The same goes for phone batteries — some people panic below fifty percent, others are surprised if their phone is ever above fifty percent charged. When it comes to our internal tanks, this matters far more than petrol in an engine or a phone battery, because it's about our actual lives.",

			"Personally, I ended up right in the depleted zone. My first major symptom showed up in my physical tank — I had chronic arthritis and chronic fatigue for six years. Every movement was dictated by chronic ill health and an incurable diagnosis I'd been given, and I was not in a happy space. I blamed others, I felt stuck and frustrated. Then I read this promise of Jesus — I have come that you may have life to the full — and one of the challenges I felt God put to me was that he hadn't designed me to live in the bottom half of that tank the way I was living.",

			"If I'm honest, over twenty-five years in pastoral church ministry, my address was more often in the middle of the tanks than above the healthy line. I made plenty of excuses to myself — that it was just a busy season, except when a season never ends it's not a season anymore, it's an address. That I was under more stress than other people, even though I had no real way of knowing that was true. That somebody has to do the work, so who's going to do it if I don't? And, if I'm confessing it honestly, that people who managed to live in the top third of their tanks were probably just a bit lazy, while hard workers like me could never live that way because we had too much on the go. It was a giant load of rubbish I was telling myself.",

			"Over a journey of about two years — the two years that gave rise to this whole framework — I felt God regularly challenge me on the thought patterns that kept me living in the middle of each tank, which led to a depleted life, physical breakdown, and burnout symptoms that were never his promise to me. He promised life to the full. So I set out with a real intention: I wanted to live most of every year — I hoped for something like ninety percent — in the top third of my physical, mental, emotional and spiritual tanks. Over the last eight years, by God's grace and after some real, ongoing, deep work, I'd say I'm living in the top third of each tank around ninety percent of the time. It isn't because the external stress in my life decreased — it's because internal changes and adjustments have been made, with God's help and grace, and with my wife and others helping me figure it out along the way. The starting point is understanding that we were designed to live in the top third, not just visit there occasionally.",

			'Which brings me to the second point — an invitation from Jesus. Matthew 11:28-29: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, and you will find rest for your souls." This invitation is Jesus speaking to any human being willing to listen and come to him — the person of Jesus himself. In my own journey with these things, I\'ve found real truth from all kinds of holistic health practitioners, most of whom have simply discovered a biblical truth and done research to enlarge on it. But the starting point, the middle point and the finishing point of this journey is the person of Jesus. Without Christ at the centre, all we end up with is a few good ideas — not the one who invites us to come to him so we can find rest for our souls, or fuel for our tanks.',

			"The rest he's talking about isn't the absence of work — it's a restfulness within our work and day-to-day life, living in that full, top-third space rather than depleted. Trying to do this journey without coming to him is a bit like watching a 3D movie without the glasses — you can still follow the general storyline, but when you put the glasses on, suddenly everything has depth and lines up properly. When we come to Christ as the starting point, and at every point along the way, he shows us what needs to change. There were so many moments in my own journey when I was confused about my own internal health, and I'd simply pray — God, I'm sorry, please forgive me, please help me, show me, I need your guidance, your wisdom and your grace.",

			"One reason we've built thirty-six devotional readings into this series is that each day you're invited to come and spend time with him — setting other things aside, putting the phone down. For me, what works best is finding a table to sit at with my Bible, a pen and a notebook, and actually underlining and circling things in the readings that speak to me. I want to absorb the content, but more than that, I want to come to him and ask him to guide me through it — Jesus, give me the 3D glasses to see what you're saying as I go through this.",

			'Which brings me to the third and final point — a response is needed from me: a willingness to change. That same verse from Matthew 11 has this phrase, "learn from me." To learn, I need to be willing to change. Learning here means far more than picking up head knowledge I could recite to someone else — it means learning something in order to make changes in my day-to-day life. It\'s entirely possible to go through this six-week series and come away with good head knowledge, some nice notes and pictures in the workbook margins — or we could come to him and actually make some changes for the better.',

			"Going back about ten years in my own story, this all felt genuinely confusing to me at the time. I had some outside health practitioners helping, guiding and challenging me, and I'd come away from conversations confused about what I actually needed to change — I thought everything was fine, but clearly it wasn't. I'd sit before God and ask him to help and guide me, and one of the things I felt led to do was, every day, draw a little diagram and measure the health of my four tanks — physical, mental, emotional and spiritual. It was just a daily reflective exercise, because I couldn't see another way to learn to think differently.",

			"At the top of your devotional pages — starting on page seventeen — you'll see a small block like that on each of the thirty-six days: a space to rate your physical, mental, emotional and spiritual energy levels for that day. This first week might be the trickiest to rate, but it's good to start and keep thinking about it as we go. Each week through the series we'll be focusing on one tank at a time, to help us understand it for ourselves.",

			"For those who'd rather do this via an app, there's one available — called Fuelled — on the Apple App Store now, with an Android version expected very soon. It lets you rate those four tanks on your phone and can send you a daily reminder at whatever time suits you.",

			"To give a brief overview of the four tanks, since we'll go much deeper into each one over the coming weeks: the physical tank is the easiest to understand — how tired or rested you are, how well you've eaten and hydrated over the past day, whether you've been getting some exercise, and more. The emotional tank is about how you've actually been feeling over the past day — happy, sad, troubled, calm, stressed — there are a lot more words for emotions than most of us reach for, and the bigger question underneath is always why you're feeling that way. The mental tank is about the quality of your thoughts over the past day — positive, creative and clear, or negative and sluggish — whether your mind has felt sharp and your decision-making has felt smooth. And the spiritual tank is about how close you've felt to the Father over the past day — and interestingly, when the other tanks run low, that one often takes some strain too.",

			"There's tremendous value in doing this as part of a group. Working through it alone, you're often chewing the end of your pen, not quite sure what score to put down — but in a group, you listen to the content together, and in the discussion afterwards someone else's honesty about their week can help you notice something about your own. Hearing what challenged somebody else that week helps you fill in your own picture a little better as you go. As the saying goes — if you want to go fast, go alone, but if you want to go far, go together. So over these six weeks we're doing this together on Sundays, together in groups through the midweek videos, and alone with God through the daily devotional readings.",

			"To recap: we have an incredible promise from Jesus that we can live life to the full, and we'll explore what that looks like. We have an invitation from Jesus to come to him — he's the starting point and the centre of this whole conversation. And there's a response needed from me: a willingness to change.",

			"To close, I'd like to do something a little different. I'm going to ask for the verse from Matthew 11:28-29 to go back up on the screen, and instead of inviting you to close your eyes as we usually do, I'd like to invite you to stand with me and pray with your eyes open, looking at that verse, echoing the prayer in your heart as I pray it out loud:",

			"\"Lord Jesus, you invite us to come to you, and today we choose to come to you. I'm often weary and burdened, and I often don't read my own internal signals well — but you promise to give me rest, and I don't just want the rest that comes from a good annual holiday. I want the rest that comes from living a day-to-day life that's aligned with you. You invite me to take your yoke upon me and learn from you — and as we begin this Fuelled series, Lord Jesus, I'm willing to change, I'm willing to learn, and I'm willing to grow. None of us has it all together or has all the answers, and as we learn from you, we want to find rest for our souls. We love you, the God who made us so fearfully and wonderfully — body, soul, mind and spirit — an incredible creation. Help us learn to steward our internal tanks the way you want us to. In Jesus' name, amen.\"",

			"[Worship song]",

			"After the service, there was a short word of thanks and an invitation for anyone wanting prayer, or a first-time visitor wanting to connect, to come forward or visit the connect stations in the foyer for coffee and a chat."
		]
	},
	{
		number: 2,
		title: 'Give Attention To Your "Body Tank"',
		tank: 'Physical',
		description: 'Loving God with all your strength — rest, food, and the body.',
		speaker: 'Wayne Neuper',
		youtubeUrl: 'https://www.youtube.com/watch?v=Jq5Ys0hZ5Dg',
		confirmed: true
	},
	{
		number: 3,
		title: 'Love The Lord With All Your Soul',
		tank: 'Spiritual',
		description: 'The cornerstone tank — our connection with God.',
		youtubeUrl: 'https://www.youtube.com/watch?v=xowWS4-DB5w',
		confirmed: true
	},
	{
		number: 4,
		title: 'The Emotional Tank',
		tank: 'Emotional',
		description: 'Loving God with all your heart — feeling and processing well.',
		youtubeUrl: 'https://www.youtube.com/watch?v=Ml5YC7g8wgQ',
		confirmed: false
	},
	{
		number: 5,
		title: 'The Mental Tank',
		tank: 'Mental',
		description: 'Loving God with all your mind — thoughts, decisions, and belief.',
		youtubeUrl: 'https://www.youtube.com/watch?v=rxZXvSq41dY',
		confirmed: false
	},
	{
		number: 6,
		title: 'Living in the Healthy Zone',
		tank: 'Bringing it together',
		description: 'Reading the signals and making the healthy zone your address.',
		youtubeUrl: 'https://www.youtube.com/watch?v=DatPqPbC5HQ',
		confirmed: false
	}
];
