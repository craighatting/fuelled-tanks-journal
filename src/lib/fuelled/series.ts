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
 * Parts 1-4 are transcribed from the actual sermon audio (source transcripts
 * supplied directly). Note this church's own word-to-tank mapping is not the
 * naive Luke 10:27 reading — per the sermons themselves, "soul" (week 3) is
 * the emotional tank and "heart" (week 4) is the spiritual tank, the reverse
 * of what you'd assume. Parts 5-6 (mental tank, and the finale) are still
 * placeholders — replace with the real titles/transcripts when available.
 */
export const seriesParts: SeriesPart[] = [
	{
		number: 1,
		title: 'Life To The Full',
		tank: 'Introduction',
		description: 'The four tanks, the greatest commandment, and why we run out of fuel.',
		speaker: 'Steve Jacobs',
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
		confirmed: true,
		transcript: [
			"It's wonderful to be back here again. The last time we were here was 2019 — a lot's happened since then, including two years of COVID, but our friendship has remained in place, and it's great to spend time together and to reconnect with people here we've grown to know.",

			"This church has an amazing reputation, and it's been wonderful to observe from a distance all that God has been doing here — an inspiration to us in our building project, in the area of faith, and in being effective and personal while bringing a message that's relevant to people today. Thank you for the partnership we get to have across the miles.",

			"We were raised in South Africa, lived there for thirty-five years, and we've now been living in Dresden, Germany, for nearly twenty-five years. We've had wonderful and challenging moments, but it's been God's plan for us. We have three children who are married and eight grandchildren — God has amazingly blessed us — and we get to come back here every now and again to reconnect with our African hearts.",

			"My subject this morning is: give attention to your body tank. I've been inspired by this series, by the workbook, and by last week's message — and I think this is an important subject, because we're not just spiritual beings, we're physical beings too.",

			"A 2019 global wellness survey rated South Africans as dangerously unhealthy — among the unhealthiest in the world — tracking things like unhealthy eating, disease rates and health spending. A more recent survey placed South Africa near the top of the list for unhealthy lifestyle factors: smoking, obesity, drinking, and physical inactivity. Taken together, the statistics say South Africans as a whole are not in a good place when it comes to health — which is surprising, because from the outside this looks like such a sport-loving nation.",

			"Intuitively, most of us already know we need to give attention to our physical condition — just think about how many New Year's resolutions involve eating or exercise. The diet and fitness industries know exactly how we think, and thrive every January. We know something needs to change. Some of us justify neglecting our health — too busy to exercise, can't afford to eat well, or the idea that God is only interested in our spirit, not our body.",

			"But here's a simple truth: every one of us has only been given one body. You don't get another one. So the only sensible conclusion is that I need to look after the one body I've been given — because if my physical tank ceases to exist, every other tank ceases to exist with it. Will you be there for your bucket list, to enjoy what you've built, to walk your daughter down the aisle, to be there for your grandkids?",

			"Over a Christmas holiday, our grandchildren wanted to play hide-and-seek with us in a multi-storey indoor jungle gym — tunnels and all — and I was genuinely glad in that moment that I had good health, crawling around after them. You owe it to your family to look after your health. But God is interested in your physical health too — it matters to him.",

			'1 Corinthians 6:19-20 says: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honour God with your bodies." That passage was written specifically about sexual immorality, but the principle extends further.',

			"First: my body is a temple of the Holy Spirit. From the day you commit your life to Christ, the Holy Spirit comes to live in you — he looks after us, speaks to us, guides us — and our bodies become a dwelling place for him. So look after that body. Second: my body belongs to him. You were bought at a price — the highest price he could pay. That means you're not your own; you belong to him, and a culture that says \"my body is mine, I'll do with it whatever I want\" runs against what Scripture says here. What you think you own is really on loan to you.",

			"Third: my task is to steward my body — it's been given to me on loan for my walk on this earth, and one day it will be changed into another body. Fourth: if we honour and look after this body, we honour God by stewarding it well. So — how well are you stewarding the body you've been given on loan by your Heavenly Father?",

			"Some practical points. First, eat healthily — not just eat, eat healthily. My mother's generation ate to live; that's a different posture from working just so you can eat. Ecclesiastes 9:7 says: \"Go, eat your bread with joy and drink your wine with a merry heart, for God has already approved what you do.\" Eating together is a good and God-approved thing — think how often Jesus ate with people. The point isn't that eating is bad, it's eating healthily. As Hippocrates said, you are what you eat — the less processed your diet, the healthier you'll be. A simple set of tips: five different vegetables a day, more greens and less processed food, less red meat, cut sugary drinks (diet or not, they're all bad for you), take smaller portions, and slow down — chew properly and give yourself time to breathe between bites.",

			"Second, exercise regularly — not just exercise, regularly. A large share of adults don't exercise at all. If it helps, make it an act of worship rather than a guilt response to what you ate yesterday — every time you move your body, it can be an attitude of gratitude that God gave you a body that can walk, that isn't confined to a wheelchair. Some people find that combining a walk with prayer helps them stick with it. Exercising with someone else adds accountability — you show up because someone's expecting you. And there's real science behind it too: exercise that raises your heart rate boosts a brain chemical (BDNF) that helps you think more clearly and lowers your risk of depression.",

			"Third, rest intentionally. Some of us only rest because we collapse from exhaustion, rather than choosing it. Sleep is one of the greatest gifts of life — indispensable for recovering energy — and adults are generally recommended seven or more hours a night. Do it with intention, not as an afterthought.",

			'Fourth, monitor your other tanks. Proverbs 17:22 says: "A cheerful heart is good medicine, but a crushed spirit dries up the bones." A cheerful heart has a genuinely good effect on your body; a crushed spirit — crushed emotions — has a bad one. Early in my career, during an intensely pressured season with almost no sleep, I developed chest pain so severe I thought I was having a heart attack. The doctor diagnosed a stress-related digestive condition — nothing physically wrong, just my mind\'s stress playing out in my body. I only had it once, because I learned the lesson: our emotional, mental and spiritual tanks affect our physical tank directly, so get them in order too.',

			"One caution on balance: stewarding this body well doesn't mean making the body, sport or fitness into an idol. For me, running matters, but serving Jesus comes first — everything else, including training, submits to that. Choosing gratitude in a stressful moment can actually lower the stress hormone cortisol your body is pumping out, and release something better in its place.",

			"I want to be gentle here — every situation is different, and I'm not walking in your shoes or living with your health issues. But every one of us is responsible for our own life, and when we want to honour God, one way we do that is by looking after the body he's given us. What's your next step this week?",

			'Closing prayer: "Thank you for your incredible grace to us, Lord Jesus. Thank you for this body you\'ve given me, and for all that it does and is able to do — the way it recovers, day after day. I ask for your wisdom, that you\'d help me know the next step so I can honour you with my body — for some of us that\'s eating, for some it\'s exercise — so that we can live an abundant life, because you are with us and helping us. We praise you in Jesus\' name."',

			'[Transcript cuts off here — the source recording exceeds the free transcription length available.]'
		]
	},
	{
		number: 3,
		title: 'Love The Lord With All Your Soul',
		tank: 'Emotional',
		description: 'Loving God with all your soul — feeling and processing well.',
		speaker: 'Steve Jacobs',
		youtubeUrl: 'https://www.youtube.com/watch?v=xowWS4-DB5w',
		confirmed: true,
		transcript: [
			"Good morning, everybody. Before diving into the message — wasn't it wonderful to celebrate all the water baptisms in this service? You'll have noticed a number of children baptised too — when it comes to children, we leave that decision with the parents, and we'd suggest waiting until a child is old enough to remember it themselves, since Ephesians 4 speaks of one baptism, one they need to be able to remember for the rest of their lives.",

			"We're in week three of our Fuelled series. Today's title is: love the Lord with all your soul. Our key verse for the series is Luke 10:27 — love the Lord your God with all your heart, with all your soul, with all your strength, and with all your mind. Last week we looked at strength, our physical body; this week we're dealing with the second tank, our emotional energy — soul.",

			"Those four words — heart, soul, strength, mind — roughly equate to our four internal tanks: emotional, spiritual, physical and mental. The metaphor of the whole series is that in each of these tanks we're trying to live in the healthy zone, the top third — not from a selfish motive, but so we can love God fully and live out the life he has for us. Drop into the middle third and we're in a danger zone; drop into the bottom third — a burnout zone I spent years in myself and never want to return to — and that's not how we were designed to live.",

			"This emotional tank was the one I was weakest in, by a long shot, when I began my own journey back to full health — so maybe for you it's a different tank that needs the most work, but we're asking God to help us learn and grow as we go. The basic maths of this whole series is simple: if your inflow is greater than your outflow over time, you end up in the healthy zone; if your outflow outpaces your inflow, even by a small amount consistently, you end up depleted, little by little, without quite noticing how you got there. This is a message of hope — we don't have to live in the middle or the bottom of these tanks.",

			"Let's talk about our feelings today. Picture a continuum with two ends. On one end, feelings equal everything — say exactly what you're feeling, right now, live your authentic life, don't let anyone limit you. On the other end, feelings equal nothing — bottle it all in, don't let anyone know how you're feeling, play your cards close to your chest; borrowing a word from the Greek Stoics, who suppressed all emotion and showed no pain. Each end is critical of the other — too harsh and uncaring, or too emotional — and both have a point. We're not designed to live at either extreme, but somewhere in the healthy middle.",

			"Does the Bible tell us how Jesus expressed and processed his own emotion? It does. In John 11, when Jesus sees Mary weeping over the death of her brother Lazarus, along with those mourning with her, it says he was deeply moved in spirit and troubled — and then, simply, \"Jesus wept.\" What makes that even more remarkable is that within the hour he was about to raise Lazarus back to life — he already knew that was coming, and he still felt and expressed the emotion of the moment with that grieving family. On the other end, Luke 10:21 says Jesus was \"full of joy through the Holy Spirit\" — a joy that was visibly expressed, or his disciples wouldn't have known to write it down.",

			"So, two things: emotions are a gift from God. They don't always feel like a gift — the stronger negative ones can feel overwhelming — but God designed even the hardest emotions as a gift, so we can experience and process life fully and deeply. And, emotions are a gift, but they shouldn't govern our world. We see that clearly in Gethsemane, where Jesus was \"sorrowful, even to the point of death,\" and prayed, \"My Father, if it is possible, may this cup be taken from me.\" For so many of us, that's the whole prayer — but Jesus goes on: \"yet not as I will, but as you will.\" He expressed his real, authentic emotion, without letting it dictate his direction — otherwise he'd never have gone to the cross.",

			"Learning to understand and properly manage my own emotional tank has been one of the biggest growth journeys of my adult life. Around age twelve or thirteen, during a season when my mum went through serious health issues and I was sent away to boarding school, separated from family and friends at a vulnerable age, I made a subconscious decision that emotions were dangerous — that showing too much of what I felt made me vulnerable — so I veered hard toward suppressing everything. It didn't serve me well. Break the word \"disease\" in two and you get \"dis-ease,\" and when we don't have language for what's going on in our emotional tank, we can start to believe that dis-ease is just normal, when it isn't.",

			"Three questions have been huge for me personally in learning to engage with my emotions honestly, without letting them run my life. Number one: what am I really feeling? Most of us have a pretty limited emotional vocabulary, but if I can name a feeling, I can generally process it — as in Psalm 55: \"my thoughts trouble me, I am distraught.\" With our own boys, when they were young, we downloaded a printed \"wheel of emotions\" and asked them to stand in front of it and pick two words describing their day — a small, fun way to normalise the language of emotion in our family, since Jax was good at it and I really wasn't, growing up the way I did.",

			"Number two: why am I feeling like this? Psalm 42 has the writer asking his own soul, \"why are you downcast?\" Most big feelings have triggers, and the triggers are often small even when the impact is big. I can think of coming home after a couple of stressful days and reacting to something one of our sons hadn't done quite right with far more intensity than the situation actually called for — and, on that occasion, having the grace afterward to go back and say, \"I'm sorry for how I came across — the problem's still the problem, but I should have dialled it down a notch, could we reset that conversation?\" Understanding my own triggers changes how I read other people's big reactions too — there's usually something else going on underneath that I can't see, and it isn't always about me.",

			"It's also worth remembering: my feelings are real, but not always reliable. I've had an hour or two of feeling quite discouraged, gone to bed, woken up the next morning thinking about exactly the same circumstances, and suddenly the world looked a lot brighter — the feelings had changed even though nothing else had. Elijah, in one low moment, tells God he's the only faithful person left in the whole country; God's answer is simply, no you aren't — there are at least four hundred more. A real feeling isn't necessarily a fact.",

			"Which brings me to the third question: what am I going to do with these feelings? Every one of us has natural, habitual ways of dealing with our strongest emotions, built up over a lifetime, and not all of them are healthy — the Stoics bury and suppress, the other extreme just expresses everything immediately, and neither is that healthy. Two better options, to close with: pray them, and process them fully. The Psalms — the Bible's longest book — model this constantly: real emotional honesty poured out to God, from gratitude to lament to even anger, expressed and then met with God's perspective and presence. Processing fully means not skirting the edge of the hard emotion looking for a shortcut around it — grief, for instance, is like a valley you have to walk into and through, in your own time, because there's fruit God grows in that valley that you'll never taste up on the rim. Psalm 23 promises: \"even though I walk through the darkest valley, I will fear no evil, for you are with me\" — not waiting on the far side, but present with us the whole way through.",

			"So: emotions are a gift from God, but they're not meant to govern our lives. We process them well by asking what am I feeling, why am I feeling this way, and what am I going to do about it — praying them honestly to God, and processing them fully rather than shortcutting the valley. In closing, right where you're at this morning — what are you really feeling?",

			'[Transcript cuts off here — the source recording exceeds the free transcription length available.]'
		]
	},
	{
		number: 4,
		title: 'Love The Lord With All Your Heart',
		tank: 'Spiritual',
		description: 'The cornerstone tank — our connection with God.',
		speaker: 'Steve Jacobs',
		youtubeUrl: 'https://www.youtube.com/watch?v=Ml5YC7g8wgQ',
		confirmed: true,
		transcript: [
			"Good morning, everybody. We're in week four of our Fuelled series. I'd like to echo the welcome from earlier — welcome to everyone watching online too. Before diving in, thank you to everyone who's given feedback on the series so far — one lady from this church and a colleague, who also attends here, approached their employer for permission to run a Fuelled group at work, and nine people have joined so far who've never been to this church. I've heard several other stories of people stepping out to start or lead groups in different places — well done, and thank you to everyone involved.",

			"Our title today is: love the Lord with all your heart. That's from Luke 10:27, our text for this series — love the Lord your God with all your heart, with all your soul, with all your strength, and with all your mind. Those four words roughly correlate to our four internal tanks of physical, emotional, spiritual and mental energy. We've covered the physical and emotional tanks over the last two weeks; today it's spiritual energy — love the Lord your God with all of your heart.",

			"One comment on the tanks picture we've been using: these four tanks aren't separate from each other — they're bolted together on the inside of us, connected by a kind of pipe. Something good in the emotional space benefits the body; something good in the spiritual space benefits the body, the emotions and the mind too. Our relationship with God is unique to each of us — you can talk about it, but the Bible has this line: \"taste and see that the Lord is good.\" Talking about a relationship with God is one thing; tasting and seeing it for yourself is another, and that's the invitation to all of us, to fill up the spiritual energy tank God has given us.",

			"My key text this morning is John 15:5, where Jesus says: \"I am the vine, you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.\" Jesus is speaking to people who understood agriculture deeply, and uses this picture from nature to describe how essential our spiritual connection to him is. I'd like to take three phrases from that verse.",

			"First: I am the vine, you are the branches. Take away a branch and a tree keeps growing; take away the trunk and the root system, and you don't have a tree at all. The trunk and roots provide nutrients, water, support and strength to the branches as they blow in the wind — Jesus is telling us he's the main one, the source of spiritual life to every one of us branches, providing the life-giving supply and the strength to hold on as we blow in the wind of day-to-day life. So here's the honest question: do you and I really see our relationship with him that way — him as the trunk, me as the branch — or do I quietly see myself as the main one, and just ask him to send the rain now and then?",

			"Second: apart from me, you can do nothing. That's a strange claim, on the surface — plenty of people who don't believe in Jesus do a lot of good in the world. But apart from Christ, I can do nothing of eternal value — only things that last within this life. Later in the same passage Jesus says he's appointed every follower to bear fruit that lasts for eternity, and the only way to do that is by staying connected to the vine, finding purpose and life-giving supply from him. Saw a branch off the edge of a tree and it dies long before the trunk does — and yet so many of us believe we don't need to stay connected to Jesus to find purpose and well-being in life.",

			"Third: you will bear much fruit — and the purpose of fruit isn't for the tree or the branch, it's for others. In Galatians 5, Paul lists the fruit that should be hanging off our branches: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control. A good exercise this week is to picture those nine as fruit hanging on the branches of your life and ask honestly — is that fruit increasing? For some of us it's grown over the last five years; for some of us it's diminished a little. The solution isn't to work harder at it — it's to get more connected to him, because he says if we remain in him, we'll bear that fruit.",

			"So practically — what keeps this tank fuelled, keeps us connected to the vine? Number one: obeying him. Later in this same teaching Jesus says, \"If you keep my commands, you will remain in my love.\" The number one sign the Bible gives of our connection to him is our obedience to him. When we read something in the Bible where God is clear about what we need to do, are we obeying it — or treating it as a general suggestion, take it or leave it?",

			"Number two: time alone with him. Every worthwhile relationship in life requires time to grow, or even just to be maintained — that's true in marriage, and it's true here. \"I don't have time\" is an excuse I've used and heard often, and I'd suggest two answers to it. First: everything busy in my life, I chose to do — shifting the language from \"I have to\" to \"I chose to\" changes how I see it. Second: we find time for what's genuinely important to us — imagine being offered a million dollars for completing a physical challenge in six months; most of us would suddenly find the time to train for it. Reading his word, talking to him in prayer, and listening for his encouragement are three simple ways to spend that time. A simple Bible reading plan — three bookmarks, one each in the Old Testament, the Psalms, and the New Testament, moved forward a little each day — will take you through the whole Bible in a year or two. No prizes for speed, but a huge reward for consistency.",

			"Number three: time with his community. I once received an email from someone in a genuine, growing relationship with God through daily Bible reading and prayer, but struggling to find a church he connected with in his city, and asking whether in-person community really mattered that much. Hebrews says: \"let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing.\" Acts 2 says the believers devoted themselves to fellowship. It's possible to have a relationship with the vine on your own — that's the starting point — but if you're connected to the vine, you'll be connected to a lot of other branches too, because that's how God designed it.",

			"Our posture when we connect with community matters enormously. Some people arrive leaning forward, looking for connection, and they tend to find it; others arrive with a posture of \"entertain me\" — and in the very same month, at the very same church, I'll hear one person say this is the friendliest place they've ever found and they feel like they've found family, and another say it felt cliquey and unfriendly. We tend to get back the kind of energy we give off. There's an old story of a preacher visiting a man living alone in the woods, who says the church is full of hypocrites and he's better off by himself; the preacher removes a single burning log from the fire and sets it alone on the hearth. By the time they finish talking, that log has gone cold while the rest of the fire still roars — we need community to help the fire keep burning, because God works through the people around us.",

			"To recap: John 15:5 — I am the vine, you are the branches; remain in me and you'll bear much fruit, apart from me you can do nothing. We keep this spiritual tank strong through obedience, through time alone with him, and through time with his community.",

			'[Transcript cuts off here — the source recording exceeds the free transcription length available.]'
		]
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
