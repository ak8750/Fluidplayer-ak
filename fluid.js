ggvar fluidPlayerScriptLocation = function() {
	var e, t, i = "";
	return (i = document.currentScript ? document.currentScript.src : (e = document.getElementsByTagName("script"), void 0 !== (t = e[e.length - 1]).getAttribute.length ? t.src : t.getAttribute("src", -1))) ? i.substring(0, i.lastIndexOf("/") + 1) : ""
}();
"function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
		value: function(e) {
			"use strict";
			if (null == e) throw new TypeError("Cannot convert undefined or null to object");
			for (var t = Object(e), i = 1; i < arguments.length; i++) {
				var n = arguments[i];
				if (null != n)
					for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
			}
			return t
		},
		writable: !0,
		configurable: !0
	}),
	function() {
		function e(e, t) {
			t = t || {
				bubbles: !1,
				cancelable: !1,
				detail: void 0
			};
			var i = document.createEvent("CustomEvent");
			return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
		}
		"function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
	}(), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(e) {
		e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			value: function() {
				null !== this.parentNode && this.parentNode.removeChild(this)
			}
		})
	}), fluidPlayer = function(e, t) {
		function i(e, t) {
			for (var i = t.length, n = 0; n < i; n++)
				if (t[n] == e) return 1
		}
		var n = fluidPlayerClass.constructor();
		for (var o in fluidPlayerClass) fluidPlayerClass.hasOwnProperty(o) && !i(o, fluidPlayerClass.notCloned) && (n[o] = fluidPlayerClass[o]);
		return fluidPlayerClass.instances.push(n), n.init(e, t), n
	};
var fluidPlayerClass = {
	hlsJsScript: "/scripts/hls.min.js",
	dashJsScript: "/scripts/dash.min.js",
	vttParserScript: "/scripts/webvtt.min.js",
	subtitlesParseScript: "/scripts/vtt.js",
	panolensScript: "/scripts/panolens.min.js",
	threeJsScript: "/scripts/three.min.js",
	instances: [],
	notCloned: ["notCloned", "vttParserScript", "instances", "getInstanceById", "requestStylesheet", "reqiestScript", "isTouchDevice", "vastOptions", "displayOptions", "getEventOffsetX", "getEventOffsetY", "getTranslateX", "toggleElementText", "getMobileOs", "findClosestParent", "activeVideoPlayerId", "getInstanceIdByWrapperId", "timer", "timerPool", "adList", "adPool", "isUserActive", "isCurrentlyPlayingAd", "initialAnimationSet"],
	version: "Kumar",
	vpaidVer: "2.0",
	homepage: "https://m.facebook.com/films999.xyz/about/?ref=page_internal&mt_nav=0/",
	activeVideoPlayerId: null,
	destructors: [],
	getInstanceById: function(e) {
		for (var t = 0; t < this.instances.length; t++)
			if (this.instances[t].videoPlayerId === e) return this.instances[t];
		return null
	},
	getInstanceIdByWrapperId: function(e) {
		return void 0 !== e ? e.replace("fluid_video_wrapper_", "") : null
	},
	requestStylesheet: function(e, t) {
		if (!document.getElementById(e)) {
			var i = document.getElementsByTagName("head")[0],
				n = document.createElement("link");
			n.id = e, n.rel = "stylesheet", n.type = "text/css", n.href = t, n.media = "all", i.appendChild(n)
		}
	},
	requestScript: function(e, t) {
		var i = document.getElementsByTagName("head")[0],
			n = document.createElement("script");
		n.type = "text/javascript", n.src = e, n.onreadystatechange = t, n.onload = t, i.appendChild(n)
	},
	isTouchDevice: function() {
		return !!("ontouchstart" in window || navigator.maxTouchPoints)
	},
	getMobileOs: function() {
		var e, t = navigator.userAgent,
			i = {
				device: !1,
				userOs: !1,
				userOsVer: !1,
				userOsMajor: !1
			};
		if (t.match(/iPad/i) ? (i.device = "iPad", i.userOs = "iOS", e = t.indexOf("OS ")) : t.match(/iPhone/i) ? (i.device = "iPhone", i.userOs = "iOS", e = t.indexOf("OS ")) : t.match(/Android/i) ? (i.userOs = "Android", e = t.indexOf("Android ")) : i.userOs = !1, "iOS" === i.userOs && -1 < e) {
			var n = t.substr(e + 3); - 1 !== n.indexOf(" ") && (i.userOsVer = n.substring(0, n.indexOf(" ")).replace(/_/g, "."), i.userOsMajor = parseInt(i.userOsVer))
		} else "Android" === i.userOs && -1 < e ? i.userOsVer = t.substr(e + 8, 3) : i.userOsVer = !1;
		return i
	},
	getBrowserVersion: function() {
		var e, t, i = navigator.userAgent,
			n = {
				browserName: !1,
				fullVersion: !1,
				majorVersion: !1,
				userOsMajor: !1
			};
		try {
			n.browserName = navigator.appName, -1 != (e = i.indexOf("OPR/")) ? (n.browserName = "Opera", n.fullVersion = i.substring(e + 4)) : -1 != (e = i.indexOf("Opera")) ? (n.browserName = "Opera", n.fullVersion = i.substring(e + 6), -1 != (e = i.indexOf("Version")) && (n.fullVersion = i.substring(e + 8))) : -1 != (e = i.indexOf("MSIE")) ? (n.browserName = "Microsoft Internet Explorer", n.fullVersion = i.substring(e + 5)) : -1 != (e = i.indexOf("Chrome")) ? (n.browserName = "Google Chrome", n.fullVersion = i.substring(e + 7)) : -1 != (e = i.indexOf("Safari")) ? (n.browserName = "Safari", n.fullVersion = i.substring(e + 7), -1 != (e = i.indexOf("Version")) && (n.fullVersion = i.substring(e + 8))) : -1 != (e = i.indexOf("Firefox")) ? (n.browserName = "Mozilla Firefox", n.fullVersion = i.substring(e + 8)) : (t = i.lastIndexOf(" ") + 1) < (e = i.lastIndexOf("/")) && (n.browserName = i.substring(t, e), n.fullVersion = i.substring(e + 1), n.browserName.toLowerCase() == n.browserName.toUpperCase() && (n.browserName = navigator.appName)), -1 != (t = n.fullVersion.indexOf(";")) && (n.fullVersion = n.fullVersion.substring(0, t)), -1 != (t = n.fullVersion.indexOf(" ")) && (n.fullVersion = n.fullVersion.substring(0, t)), n.majorVersion = parseInt("" + n.fullVersion, 10), isNaN(n.majorVersion) && (n.fullVersion = "" + parseFloat(navigator.appVersion), n.majorVersion = parseInt(navigator.appVersion, 10))
		} catch (e) {}
		return n
	},
	getCurrentVideoDuration: function() {
		var e = document.getElementById(this.videoPlayerId);
		return e ? e.duration : 0
	},
	getClickThroughUrlFromLinear: function(e) {
		var t = e.getElementsByTagName("VideoClicks");
		if (t.length) {
			var i = t[0].getElementsByTagName("ClickThrough");
			if (i.length) return this.extractNodeData(i[0])
		}
		return !1
	},
	getVastAdTagUriFromWrapper: function(e) {
		var t = e.getElementsByTagName("Wrapper");
		if (void 0 !== t && t.length) {
			var i = t[0].getElementsByTagName("VASTAdTagURI");
			if (i.length) return this.extractNodeData(i[0])
		}
		return !1
	},
	hasInLine: function(e) {
		var t = e.getElementsByTagName("InLine");
		return void 0 !== t && t.length
	},
	hasVastAdTagUri: function(e) {
		var t = e.getElementsByTagName("VASTAdTagURI");
		return void 0 !== t && t.length
	},
	getClickThroughUrlFromNonLinear: function(e) {
		var t = "";
		if (e.getElementsByTagName("NonLinear").length) {
			var i = e.getElementsByTagName("NonLinearClickThrough");
			i.length && (t = this.extractNodeData(i[0]))
		}
		return t
	},
	getTrackingFromLinear: function(e) {
		var t = e.getElementsByTagName("TrackingEvents");
		return t.length ? t[0].getElementsByTagName("Tracking") : []
	},
	getDurationFromLinear: function(e) {
		var t = e.getElementsByTagName("Duration");
		if (t.length && void 0 !== t[0].childNodes[0]) {
			var i = this.extractNodeData(t[0]);
			return this.convertTimeStringToSeconds(i)
		}
		return !1
	},
	getDurationFromNonLinear: function(e) {
		var t = 0,
			i = e.getElementsByTagName("NonLinear");
		return i.length && void 0 !== i[0].getAttribute("minSuggestedDuration") && (t = this.convertTimeStringToSeconds(i[0].getAttribute("minSuggestedDuration"))), t
	},
	getDimensionFromNonLinear: function(e) {
		var t = {
				width: null,
				height: null
			},
			i = e.getElementsByTagName("NonLinear");
		return i.length && (void 0 !== i[0].getAttribute("width") && (t.width = i[0].getAttribute("width")), void 0 !== i[0].getAttribute("height") && (t.height = i[0].getAttribute("height"))), t
	},
	getCreativeTypeFromStaticResources: function(e) {
		var t = "",
			i = e.getElementsByTagName("NonLinear");
		return i.length && void 0 !== i[0].childNodes[0] && (t = i[0].getElementsByTagName("StaticResource")[0].getAttribute("creativeType")), t.toLowerCase()
	},
	getMediaFilesFromLinear: function(e) {
		var t = e.getElementsByTagName("MediaFiles");
		return t.length ? t[0].getElementsByTagName("MediaFile") : []
	},
	getStaticResourcesFromNonLinear: function(e) {
		var t = [],
			i = e.getElementsByTagName("NonLinear");
		return i.length && (t = i[0].getElementsByTagName("StaticResource")), t
	},
	extractNodeData: function(e) {
		for (var t = "", i = 0; i < e.childNodes.length; i++) {
			var n = e.childNodes[i];
			8 === n.nodeType || 3 === n.nodeType && /^\s*$/.test(n.nodeValue) || (t += n.nodeValue)
		}
		return t.replace(/(^\s+|\s+$)/g, "")
	},
	getAdParametersFromLinear: function(e) {
		var t = e.getElementsByTagName("AdParameters"),
			i = null;
		return t.length && (i = this.extractNodeData(t[0])), i
	},
	getMediaFileListFromLinear: function(e) {
		var t = [],
			i = this.getMediaFilesFromLinear(e);
		if (i.length)
			for (var n = 0; n < i.length; n++) {
				var o = i[n].getAttribute("mediaType");
				o = o || "2D", t.push({
					src: this.extractNodeData(i[n]),
					type: i[n].getAttribute("type"),
					apiFramework: i[n].getAttribute("apiFramework"),
					codec: i[n].getAttribute("codec"),
					id: i[n].getAttribute("codec"),
					fileSize: i[n].getAttribute("fileSize"),
					delivery: i[n].getAttribute("delivery"),
					width: i[n].getAttribute("width"),
					height: i[n].getAttribute("height"),
					mediaType: o.toLowerCase()
				})
			}
		return t
	},
	getIconClickThroughFromLinear: function(e) {
		var t = e.getElementsByTagName("IconClickThrough");
		return t.length ? this.extractNodeData(t[0]) : ""
	},
	getStaticResourceFromNonLinear: function(e) {
		for (var t, i = this.getStaticResourcesFromNonLinear(e), n = 0; n < i.length; n++)
			if (i[n].getAttribute("type") || (t = this.extractNodeData(i[n])), i[n].getAttribute("type") === this.displayOptions.staticResource) return this.extractNodeData(i[n]);
		return t
	},
	registerTrackingEvents: function(e, t) {
		for (var i = this.getTrackingFromLinear(e), n = "", o = 0, a = 0; a < i.length; a++) switch (n = i[a].getAttribute("event")) {
			case "start":
			case "firstQuartile":
			case "midpoint":
			case "thirdQuartile":
			case "complete":
				void 0 === t.tracking[n] && (t.tracking[n] = []), void 0 === t.stopTracking[n] && (t.stopTracking[n] = []), t.tracking[n].push(i[a].childNodes[0].nodeValue), t.stopTracking[n] = !1;
				break;
			case "progress":
				void 0 === t.tracking[n] && (t.tracking[n] = []), o = this.convertTimeStringToSeconds(i[a].getAttribute("offset")), void 0 === t.tracking[n][o] && (t.tracking[n][o] = {
					elements: [],
					stopTracking: !1
				}), t.tracking[n][o].elements.push(i[a].childNodes[0].nodeValue)
		}
	},
	registerClickTracking: function(e, t) {
		if (e.length)
			for (var i = 0; i < e.length; i++) "" != e[i] && t.clicktracking.push(e[i])
	},
	registerImpressionEvents: function(e, t) {
		if (e.length)
			for (var i = 0; i < e.length; i++) {
				var n = this.extractNodeData(e[i]);
				t.impression.push(n)
			}
	},
	registerErrorEvents: function(e, t) {
		null != e && 1 === e.length && 1 === e[0].childNodes.length && (t.errorUrl = e[0].childNodes[0].nodeValue)
	},
	announceError: function(e) {
		if (void 0 !== this.vastOptions.errorUrl && this.vastOptions.errorUrl) {
			e = void 0 !== e ? parseInt(e) : 900;
			var t = this.vastOptions.errorUrl.replace("[ERRORCODE]", e);
			this.callUris([t])
		}
	},
	announceLocalError: function(e, t) {
		e = void 0 !== e ? parseInt(e) : 900, message = "[Error] (" + e + "): ", message += t || "Failed to load Vast", console.log(message)
	},
	getClickTrackingEvents: function(e) {
		var t = [],
			i = e.getElementsByTagName("VideoClicks");
		if (i.length) {
			var n = i[0].getElementsByTagName("ClickTracking");
			if (n.length)
				for (var o = 0; o < n.length; o++) {
					var a = this.extractNodeData(n[o]);
					t.push(a)
				}
		}
		return t
	},
	getNonLinearClickTrackingEvents: function(e) {
		var t = [];
		if (e.getElementsByTagName("NonLinear").length) {
			var i = e.getElementsByTagName("NonLinearClickTracking");
			if (i.length)
				for (var n = 0; n < i.length; n++) {
					var o = this.extractNodeData(i[n]);
					t.push(o)
				}
		}
		return t
	},
	callUris: function(e) {
		for (var t = 0; t < e.length; t++)(new Image).src = e[t]
	},
	recalculateAdDimensions: function(e) {
		if (!e && void 0 !== this.videoPlayerId) e = this.videoPlayerId;
		var t = document.getElementById(e),
			i = document.getElementById("vast_clickthrough_layer_" + e);
		i && (i.style.width = t.offsetWidth + "px", i.style.height = t.offsetHeight + "px");
		var n = this.checkFullscreenSupport("fluid_video_wrapper_" + e),
			o = document.getElementById(e + "_fluid_control_fullscreen"),
			a = document.getElementById(e + "context_option_fullscreen");
		n ? null === document[n.isFullscreen] ? this.fullscreenOff(o, a) : this.fullscreenOn(o, a) : -1 !== fullscreenTag.className.search(/\bpseudo_fullscreen\b/g) ? (fullscreenTag.className += " pseudo_fullscreen", this.fullscreenOn(o, a)) : (fullscreenTag.className = fullscreenTag.className.replace(/\bpseudo_fullscreen\b/g, ""), this.fullscreenOff(o, a))
	},
	prepareVast: function(e) {
		var t = this,
			i = document.getElementById(this.videoPlayerId),
			n = [];
		n.length = 0, n = t.findRoll(e);
		for (var o = 0; o < n.length; o++) {
			var a = n[o];
			!0 !== t.adList[a].vastLoaded && !0 !== t.adList[a].error && (t.processVastWithRetries(t.adList[a]), i.addEventListener("adId_" + a, t[e]))
		}
	},
	toggleLoader: function(e) {
		this.isLoading = !!e;
		var t = document.getElementById("vast_video_loading_" + this.videoPlayerId);
		t.style.display = e ? "table" : "none"
	},
	sendRequest: function(e, t, i, n) {
		var o = new XMLHttpRequest;
		o.onreadystatechange = n, o.open("GET", e, !0), o.withCredentials = t, o.timeout = i, o.send()
	},
	playMainVideoWhenVpaidFails: function(e) {
		document.getElementById(this.videoPlayerId);
		var t = document.getElementById(this.videoPlayerId + "_fluid_vpaid_slot");
		t && t.remove(), clearInterval(this.getVPAIDAdInterval), this.playMainVideoWhenVastFails(e)
	},
	playMainVideoWhenVastFails: function(e) {
		var t = this;
		t.debugMessage("playMainVideoWhenVastFails called");
		var i = document.getElementById(t.videoPlayerId);
		i.removeEventListener("loadedmetadata", t.switchPlayerToVastMode), i.pause(), t.toggleLoader(!1), t.displayOptions.vastOptions.vastAdvanced.noVastVideoCallback(), t.vastOptions && void 0 !== this.vastOptions.errorUrl ? t.announceError(e) : t.announceLocalError(e), t.switchToMainVideo()
	},
	switchPlayerToVastMode: function() {},
	switchPlayerToVpaidMode: function() {},
	processVastXml: function(e, t, i) {
		var n = this;
		if (e) {
			var o = e.getElementsByTagName("Impression");
			null !== o && n.registerImpressionEvents(o, t);
			var a = e.getElementsByTagName("Error");
			null !== a && n.registerErrorEvents(a, t);
			var r = e.getElementsByTagName("Creative");
			if (void 0 !== r && r.length) {
				var l = r[0].getElementsByTagName("Linear");
				if (null != l && l.length) {
					var s = l[0];
					n.registerTrackingEvents(s, t);
					var d = n.getClickTrackingEvents(s);
					n.registerClickTracking(d, t), !n.hasVastAdTagUri(e) && n.hasInLine(e) && (t.adFinished = !1, t.adType = "linear", t.vpaid = !1, t.skipoffset = n.convertTimeStringToSeconds(s.getAttribute("skipoffset")), t.clickthroughUrl = n.getClickThroughUrlFromLinear(s), t.duration = n.getDurationFromLinear(s), t.mediaFileList = n.getMediaFileListFromLinear(s), t.adParameters = n.getAdParametersFromLinear(s), t.iconClick = n.getIconClickThroughFromLinear(s), t.adParameters && (t.vpaid = !0))
				}
				var u = r[0].getElementsByTagName("NonLinearAds");
				if (null != u && u.length) {
					var c = u[0];
					n.registerTrackingEvents(c, t);
					d = n.getNonLinearClickTrackingEvents(c);
					n.registerClickTracking(d, t), !n.hasVastAdTagUri(e) && n.hasInLine(e) && (t.adType = "nonLinear", t.vpaid = !1, t.clickthroughUrl = n.getClickThroughUrlFromNonLinear(c), t.duration = n.getDurationFromNonLinear(c), t.dimension = n.getDimensionFromNonLinear(c), t.staticResource = n.getStaticResourceFromNonLinear(c), t.creativeType = n.getCreativeTypeFromStaticResources(c), t.adParameters = n.getAdParametersFromLinear(c), t.adParameters && (t.vpaid = !0))
				}!n.hasVastAdTagUri(e) && n.hasInLine(e) && (void 0 !== t.mediaFileList || void 0 !== t.staticResource ? i(!0, t) : i(!1))
			} else i(!1)
		} else i(!1)
	},
	processVastWithRetries: function(o) {
		var a = this,
			r = o.vastTag,
			l = o.id,
			s = function(e, t) {
				if (e && void 0 !== t && t.vpaid && !a.displayOptions.vastOptions.allowVPAID && (e = !1, a.announceLocalError("103", "VPAID not allowed, so skipping this VAST tag.")), e) {
					if ("linear" === t.adType) {
						void 0 !== t.iconClick && null !== t.iconClick && t.iconClick.length && (a.adList[l].landingPage = t.iconClick);
						var i = a.getSupportedMediaFileObject(t.mediaFileList);
						i && (a.adList[l].mediaType = i.mediaType)
					}
					a.adList[l].adType = t.adType ? t.adType : "unknown", a.adList[l].vastLoaded = !0, a.adPool[l] = Object.assign({}, t);
					var n = document.createEvent("Event");
					if (n.initEvent("adId_" + l, !1, !0), document.getElementById(a.videoPlayerId).dispatchEvent(n), a.displayOptions.vastOptions.vastAdvanced.vastLoadedCallback(), a.hasTitle()) document.getElementById(a.videoPlayerId + "_title").style.display = "none"
				} else a.reportError("101"), o.hasOwnProperty("fallbackVastTags") && 0 < o.fallbackVastTags.length ? (r = o.fallbackVastTags.shift(), a.processUrl(r, s)) : ("preRoll" === o.roll && a.preRollFail(o), a.adList[l].error = !0)
			};
		a.processUrl(r, s)
	},
	processUrl: function(e, t) {
		this.resolveVastTag(e, 0, {
			tracking: [],
			stopTracking: [],
			impression: [],
			clicktracking: [],
			vastLoaded: !1
		}, t)
	},
	resolveVastTag: function(e, n, o, a) {
		var r = this;
		if (e && "" != e) {
			n <= r.displayOptions.vastOptions.maxAllowedVastTagRedirects && r.sendRequest(e, !0, r.displayOptions.vastOptions.vastTimeout, function() {
				var e = this;
				if (4 !== e.readyState || 404 !== e.status)
					if (4 !== e.readyState || 0 !== e.status) {
						if (4 === e.readyState && 200 === e.status)
							if (4 !== e.readyState || 200 === e.status) {
								try {
									var t = e.responseXML
								} catch (e) {
									return void a(!1)
								}
								if (t) {
									if (r.inLineFound = r.hasInLine(t), !r.inLineFound && r.hasVastAdTagUri(t)) {
										var i = r.getVastAdTagUriFromWrapper(t);
										if (!i) return void a(!1);
										r.resolveVastTag(i, n, o, a)
									}
									n > r.displayOptions.vastOptions.maxAllowedVastTagRedirects && !r.inLineFound ? a(!1) : r.processVastXml(t, o, a)
								} else a(!1)
							} else a(!1)
					} else a(!1);
				else a(!1)
			}), n++
		} else a(!1)
	},
	reportError: function(e) {
		this.announceLocalError(e)
	},
	backupMainVideoContentTime: function(e) {
		var t = this,
			i = document.getElementById(t.videoPlayerId);
		switch (t.adList[e].roll) {
			case "midRoll":
				i.mainVideoCurrentTime = i.currentTime - 1;
				break;
			case "postRoll":
				i.mainVideoCurrentTime = t.mainVideoDuration, t.autoplayAfterAd = !1, i.currentTime = t.mainVideoDuration;
				break;
			case "preRoll":
				0 < i.currentTime && (i.mainVideoCurrentTime = i.currentTime - 1)
		}
	},
	checkVPAIDInterface: function(e) {
		return !!(e.handshakeVersion && "function" == typeof e.handshakeVersion && e.initAd && "function" == typeof e.initAd && e.startAd && "function" == typeof e.startAd && e.stopAd && "function" == typeof e.stopAd && e.skipAd && "function" == typeof e.skipAd && e.resizeAd && "function" == typeof e.resizeAd && e.pauseAd && "function" == typeof e.pauseAd && e.resumeAd && "function" == typeof e.resumeAd && e.expandAd && "function" == typeof e.expandAd && e.collapseAd && "function" == typeof e.collapseAd && e.subscribe && "function" == typeof e.subscribe && e.unsubscribe && "function" == typeof e.unsubscribe)
	},
	debugMessage: function(e) {
		this.displayOptions.debug && console.log(e)
	},
	onVpaidAdPaused: function() {
		this.vpaidTimeoutTimerClear(), this.debugMessage("onAdPaused")
	},
	onVpaidAdPlaying: function() {
		this.vpaidTimeoutTimerClear(), this.debugMessage("onAdPlaying")
	},
	onVpaidAdError: function(e) {
		this.debugMessage("onAdError: " + e), this.vpaidTimeoutTimerClear(), this.onVpaidEnded()
	},
	onVpaidAdLog: function(e) {
		this.debugMessage("onAdLog: " + e)
	},
	onVpaidAdUserAcceptInvitation: function() {
		this.debugMessage("onAdUserAcceptInvitation")
	},
	onVpaidAdUserMinimize: function() {
		this.debugMessage("onAdUserMinimize")
	},
	onVpaidAdUserClose: function() {
		this.debugMessage("onAdUserClose")
	},
	onVpaidAdSkippableStateChange: function() {
		this.vpaidAdUnit && this.debugMessage("Ad Skippable State Changed to: " + this.vpaidAdUnit.getAdSkippableState())
	},
	onVpaidAdExpandedChange: function() {
		this.vpaidAdUnit && this.debugMessage("Ad Expanded Changed to: " + this.vpaidAdUnit.getAdExpanded())
	},
	getVpaidAdExpanded: function() {
		if (this.debugMessage("getAdExpanded"), this.vpaidAdUnit) return this.vpaidAdUnit.getAdExpanded()
	},
	getVpaidAdSkippableState: function() {
		if (this.debugMessage("getAdSkippableState"), this.vpaidAdUnit) return this.vpaidAdUnit.getAdSkippableState()
	},
	onVpaidAdSizeChange: function() {
		this.vpaidAdUnit && this.debugMessage("Ad size changed to: w=" + this.vpaidAdUnit.getAdWidth() + " h=" + this.vpaidAdUnit.getAdHeight())
	},
	onVpaidAdDurationChange: function() {
		this.vpaidAdUnit && this.debugMessage("Ad Duration Changed to: " + this.vpaidAdUnit.getAdDuration())
	},
	onVpaidAdRemainingTimeChange: function() {
		this.vpaidAdUnit && this.debugMessage("Ad Remaining Time Changed to: " + this.vpaidAdUnit.getAdRemainingTime())
	},
	getVpaidAdRemainingTime: function() {
		if (this.debugMessage("getAdRemainingTime"), this.vpaidAdUnit) return this.vpaidAdUnit.getAdRemainingTime()
	},
	onVpaidAdImpression: function() {
		this.debugMessage("Ad Impression"), this.trackSingleEvent("impression")
	},
	onVpaidAdClickThru: function(e, t, i) {
		var n = this;
		n.debugMessage("Clickthrough portion of the ad was clicked"), i && window.open(n.vastOptions.clickthroughUrl), n.pauseVpaidAd(), n.callUris(n.vastOptions.clicktracking)
	},
	onVpaidAdInteraction: function(e) {
		this.debugMessage("A non-clickthrough event has occured")
	},
	onVpaidAdVideoStart: function() {
		this.debugMessage("Video 0% completed"), this.trackSingleEvent("start")
	},
	onVpaidAdVideoFirstQuartile: function() {
		this.debugMessage("Video 25% completed"), this.trackSingleEvent("firstQuartile")
	},
	onVpaidAdVideoMidpoint: function() {
		this.debugMessage("Video 50% completed"), this.trackSingleEvent("midpoint")
	},
	onVpaidAdVideoThirdQuartile: function() {
		this.debugMessage("Video 75% completed"), this.trackSingleEvent("thirdQuartile")
	},
	onVpaidAdVideoComplete: function() {
		this.debugMessage("Video 100% completed"), this.trackSingleEvent("complete")
	},
	onVpaidAdLinearChange: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId),
			i = document.getElementsByClassName("fluid_vpaidNonLinear_ad")[0],
			n = document.getElementById("close_button_" + e.videoPlayerId),
			o = i.getAttribute("adlistid");
		if (e.debugMessage("Ad linear has changed: " + e.vpaidAdUnit.getAdLinear()), e.vpaidAdUnit.getAdLinear()) {
			e.backupMainVideoContentTime(o), e.isCurrentlyPlayingAd = !0, n && n.remove(), i.className = "fluid_vpaid_slot", i.id = e.videoPlayerId + "_fluid_vpaid_slot", t.loop = !1, t.removeAttribute("controls");
			for (var a = t.parentNode.getElementsByClassName("fluid_controls_currentprogress"), r = 0; r < a.length; r++) a[r].style.backgroundColor = e.displayOptions.layoutControls.adProgressColor;
			e.toggleLoader(!1)
		}
	},
	getVpaidAdLinear: function() {
		return this.debugMessage("getAdLinear"), this.vpaidAdUnit.getAdLinear()
	},
	startVpaidAd: function() {
		this.debugMessage("startAd"), this.vpaidTimeoutTimerStart(), this.vpaidAdUnit.startAd()
	},
	onVpaidAdLoaded: function() {
		this.debugMessage("ad has been loaded"), this.vpaidTimeoutTimerClear(), this.startVpaidAd()
	},
	onStartVpaidAd: function() {
		this.debugMessage("Ad has started"), this.vpaidTimeoutTimerClear()
	},
	stopVpaidAd: function() {
		this.vpaidTimeoutTimerStart(), this.vpaidAdUnit.stopAd()
	},
	hardStopVpaidAd: function(e) {
		this.vpaidAdUnit && (this.vpaidAdUnit.stopAd(), this.vpaidAdUnit = null);
		for (var t = document.getElementsByClassName("fluid_vpaid_iframe"), i = document.getElementsByClassName("fluid_vpaid_slot"), n = document.getElementsByClassName("fluid_vpaidNonLinear_ad"), o = 0; o < t.length; o++) t[o].getAttribute("adListId") !== e && t[o].remove();
		for (var a = 0; a < i.length; a++) i[a].getAttribute("adListId") !== e && i[a].remove();
		for (var r = 0; r < n.length; r++) n[r].getAttribute("adListId") !== e && n[r].remove()
	},
	onStopVpaidAd: function() {
		this.debugMessage("Ad has stopped"), this.vpaidTimeoutTimerClear(), this.onVpaidEnded()
	},
	onSkipVpaidAd: function() {
		this.debugMessage("Ad was skipped"), this.vpaidTimeoutTimerClear(), this.onVpaidEnded()
	},
	skipVpaidAd: function() {
		this.vpaidTimeoutTimerStart(), this.vpaidAdUnit && this.vpaidAdUnit.skipAd()
	},
	setVpaidAdVolume: function(e) {
		this.vpaidAdUnit && this.vpaidAdUnit.setAdVolume(e)
	},
	getVpaidAdVolume: function() {
		if (this.vpaidAdUnit) return this.vpaidAdUnit.getAdVolume()
	},
	onVpaidAdVolumeChange: function() {
		this.vpaidAdUnit && this.debugMessage("Ad Volume has changed to - " + this.vpaidAdUnit.getAdVolume())
	},
	resizeVpaidAuto: function() {
		if (null !== this.vastOptions && this.vastOptions.vpaid && this.vastOptions.linear) {
			var e = videoPlayer.offsetWidth,
				t = videoPlayer.offsetHeight,
				i = this.fullscreenMode ? "fullscreen" : "normal";
			this.resizeVpaidAd(e, t, i)
		}
	},
	resizeVpaidAd: function(e, t, i) {
		this.vpaidAdUnit && this.vpaidAdUnit.resizeAd(e, t, i)
	},
	pauseVpaidAd: function() {
		this.vpaidTimeoutTimerStart(), this.vpaidAdUnit && this.vpaidAdUnit.pauseAd()
	},
	resumeVpaidAd: function() {
		this.vpaidTimeoutTimerStart(), this.vpaidAdUnit && this.vpaidAdUnit.resumeAd()
	},
	expandVpaidAd: function() {
		this.vpaidAdUnit && this.vpaidAdUnit.expandAd()
	},
	collapseVpaidAd: function() {
		this.vpaidAdUnit && this.vpaidAdUnit.collapseAd()
	},
	vpaidTimeoutTimerClear: function() {
		this.vpaidTimer && clearTimeout(this.vpaidTimer)
	},
	vpaidTimeoutTimerStart: function() {
		var e = this;
		e.vpaidTimeoutTimerClear(), e.vpaidTimer = setTimeout(function() {
			e.reportError("901"), e.onVpaidEnded()
		}, e.displayOptions.vastOptions.vpaidTimeout)
	},
	vpaidCallbackListenersAttach: function() {
		var e = this,
			t = {
				AdStarted: e.onStartVpaidAd,
				AdStopped: e.onStopVpaidAd,
				AdSkipped: e.onSkipVpaidAd,
				AdLoaded: e.onVpaidAdLoaded,
				AdLinearChange: e.onVpaidAdLinearChange,
				AdSizeChange: e.onVpaidAdSizeChange,
				AdExpandedChange: e.onVpaidAdExpandedChange,
				AdSkippableStateChange: e.onVpaidAdSkippableStateChange,
				AdDurationChange: e.onVpaidAdDurationChange,
				AdRemainingTimeChange: e.onVpaidAdRemainingTimeChange,
				AdVolumeChange: e.onVpaidAdVolumeChange,
				AdImpression: e.onVpaidAdImpression,
				AdClickThru: e.onVpaidAdClickThru,
				AdInteraction: e.onVpaidAdInteraction,
				AdVideoStart: e.onVpaidAdVideoStart,
				AdVideoFirstQuartile: e.onVpaidAdVideoFirstQuartile,
				AdVideoMidpoint: e.onVpaidAdVideoMidpoint,
				AdVideoThirdQuartile: e.onVpaidAdVideoThirdQuartile,
				AdVideoComplete: e.onVpaidAdVideoComplete,
				AdUserAcceptInvitation: e.onVpaidAdUserAcceptInvitation,
				AdUserMinimize: e.onVpaidAdUserMinimize,
				AdUserClose: e.onVpaidAdUserClose,
				AdPaused: e.onVpaidAdPaused,
				AdPlaying: e.onVpaidAdPlaying,
				AdError: e.onVpaidAdError,
				AdLog: e.onVpaidAdLog
			};
		for (var i in t) e.vpaidAdUnit.subscribe(t[i], i, e)
	},
	loadVpaid: function(i, e) {
		var n = this,
			t = document.getElementById(n.videoPlayerId),
			o = document.createElement("iframe");
		o.id = n.videoPlayerId + "_" + i + "_fluid_vpaid_iframe", o.className = "fluid_vpaid_iframe", o.setAttribute("adListId", i), o.setAttribute("frameborder", "0"), t.parentNode.insertBefore(o, t.nextSibling), o.contentWindow.document.write('<script src="' + e + '"><\/script>'), n.tempVpaidCounter = 0, n.getVPAIDAdInterval = setInterval(function() {
			var e = o.contentWindow.getVPAIDAd;
			if (e && "function" == typeof e) {
				if (n.vpaidAdUnit) {
					var t = i;
					n.hardStopVpaidAd(t)
				}
				n.vpaidAdUnit = e(), clearInterval(n.getVPAIDAdInterval), n.checkVPAIDInterface(n.vpaidAdUnit) && (n.getVpaidAdLinear() ? (n.isCurrentlyPlayingAd = !0, n.switchPlayerToVpaidMode(i)) : (n.debugMessage("non linear vpaid ad is loaded"), n.loadVpaidNonlinearAssets(i)))
			} else {
				if (n.tempVpaidCounter++, 20 <= n.tempVpaidCounter) return clearInterval(n.getVPAIDAdInterval), n.adList[i].error = !0, n.playMainVideoWhenVpaidFails(403), !1;
				n.debugMessage(n.tempVpaidCounter)
			}
		}, 100)
	},
	renderLinearAd: function(e, t) {
		var s = this,
			p = document.getElementById(s.videoPlayerId);
		s.toggleLoader(!0), s.vastOptions = s.adPool[e], t && s.backupMainVideoContentTime(e);
		var i = function() {
			if (s.adFinished) p.removeEventListener("timeupdate", i);
			else {
				var e = Math.floor(p.currentTime);
				0 != s.vastOptions.duration && s.scheduleTrackingEvent(e, s.vastOptions.duration), e >= s.vastOptions.duration - 1 && 0 != s.vastOptions.duration && (p.removeEventListener("timeupdate", i), s.adFinished = !0)
			}
		};
		! function(l) {
			s.switchPlayerToVpaidMode = function(e) {
				var t = this;
				t.debugMessage("starting function switchPlayerToVpaidMode");
				var i = t.videoPlayerId + "_" + e + "_fluid_vpaid_iframe",
					n = {};
				n.AdParameters = t.adPool[e].adParameters;
				var o = document.createElement("div");
				o.id = t.videoPlayerId + "_fluid_vpaid_slot", o.className = "fluid_vpaid_slot", o.setAttribute("adListId", e), p.parentNode.insertBefore(o, i.nextSibling);
				var a = {
						slot: o,
						videoSlot: p,
						videoSlotCanAutoPlay: !0
					},
					r = t.vpaidAdUnit.handshakeVersion(t.vpaidVer);
				if (1 === t.compareVersion(t.vpaidVer, r)) return t.adList[e].error = !0, t.playMainVideoWhenVpaidFails(403), !1;
				!1 !== t.vastOptions.skipoffset && t.addSkipButton(), p.loop = !1, p.removeAttribute("controls"), t.vpaidCallbackListenersAttach();
				var l = t.fullscreenMode ? "fullscreen" : "normal",
					s = p.offsetWidth,
					d = p.offsetHeight;
				t.vpaidAdUnit.initAd(s, d, l, 3e3, n, a);
				for (var u = p.parentNode.getElementsByClassName("fluid_controls_currentprogress"), c = 0; c < u.length; c++) u[c].style.backgroundColor = t.displayOptions.layoutControls.adProgressColor;
				t.toggleLoader(!1), t.adList[e].played = !0, t.adFinished = !1
			}, s.switchPlayerToVastMode = function() {
				(s.vastOptions.duration || (s.vastOptions.duration = p.duration), s.displayOptions.layoutControls.showCardBoardView) ? s.adList[l].landingPage ? s.addCTAButton(s.adList[l].landingPage) : s.addCTAButton(s.adPool[l].clickthroughUrl): ((void 0 !== s.adList[l].adClickable ? s.adList[l].adClickable : s.displayOptions.vastOptions.adClickable) && s.addClickthroughLayer(s.videoPlayerId), s.addCTAButton(s.adList[l].landingPage));
				!1 !== s.vastOptions.skipoffset && s.addSkipButton(), p.loop = !1, s.addAdCountdown(), p.removeAttribute("controls"), s.vastLogoBehaviour(!0);
				for (var e = p.parentNode.getElementsByClassName("fluid_controls_currentprogress"), t = 0; t < e.length; t++) e[t].style.backgroundColor = s.displayOptions.layoutControls.adProgressColor;
				if (s.displayOptions.vastOptions.adText || s.adList[l].adText) {
					var i = null !== s.adList[l].adText ? s.adList[l].adText : s.displayOptions.vastOptions.adText;
					s.addAdPlayingText(i)
				}
				if (s.positionTextElements(s.adList[l]), s.toggleLoader(!1), s.adList[l].played = !0, s.adFinished = !1, p.play(), s.trackSingleEvent("impression"), p.removeEventListener("loadedmetadata", s.switchPlayerToVastMode), s.vrMode) {
					var n = document.getElementById("ad_countdown" + s.videoPlayerId),
						o = document.getElementById(s.videoPlayerId + "_fluid_cta"),
						a = document.getElementById(s.videoPlayerId + "_fluid_ad_playing"),
						r = document.getElementById("skip_button_" + s.videoPlayerId);
					n && (n.style.display = "none"), o && (o.style.display = "none"), a && (a.style.display = "none"), r && (r.style.display = "none")
				}
			}, p.pause(), s.detachStreamers();
			var e = s.getSupportedMediaFileObject(s.vastOptions.mediaFileList);
			if (s.displayOptions.layoutControls.showCardBoardView && "360" !== s.adList[l].mediaType) return s.adList[l].error = !0, s.playMainVideoWhenVastFails(403);
			if (s.vastOptions.vpaid) s.loadVpaid(l, e.src), s.displayOptions.vastOptions.showProgressbarMarkers && s.hideAdMarkers();
			else {
				if (!1 === e.src) return s.adList[l].error = !0, s.playMainVideoWhenVastFails(403);
				p.addEventListener("loadedmetadata", s.switchPlayerToVastMode), p.src = e.src, s.isCurrentlyPlayingAd = !0, s.displayOptions.vastOptions.showProgressbarMarkers && s.hideAdMarkers(), p.load(), p.addEventListener("ended", s.onVastAdEnded)
			}
		}(e), p.addEventListener("timeupdate", i)
	},
	playRoll: function(e) {
		for (var t = this, i = (document.getElementById(t.videoPlayerId), 0); i < e.length; i++) {
			if (!t.adPool.hasOwnProperty(e[i])) return void t.announceLocalError(101);
			t.temporaryAdPods.push(t.adList[e[i]])
		}
		if (null === t.vastOptions || "linear" !== t.vastOptions.adType.toLowerCase()) {
			var n = t.getNextAdPod();
			null !== n && t.renderLinearAd(n, !0)
		}
	},
	getSupportedMediaFileObject: function(e) {
		var t = null,
			i = !1;
		if (e.length)
			for (var n = 0; n < e.length; n++) {
				if ("VPAID" === e[n].apiFramework) {
					t = e[n], i = !0;
					break
				}
				var o = this.getMediaFileTypeSupportLevel(e[n].type);
				if ("maybe" !== o && "probably" !== o || (t = e[n], i = !0), "probably" === o) break
			}
		return !1 !== i && t
	},
	getMediaFileTypeSupportLevel: function(e) {
		if (null === e) return null;
		tmpVideo = document.createElement("video");
		var t = tmpVideo.canPlayType(e);
		return "" == t && (t = "no"), delete tmpVideo, t
	},
	scheduleTrackingEvent: function(e, t) {
		var i = this;
		0 == e && i.trackSingleEvent("start"), void 0 !== i.vastOptions.tracking.progress && i.vastOptions.tracking.progress.length && void 0 !== i.vastOptions.tracking.progress[e] && i.trackSingleEvent("progress", e), e == Math.floor(t / 4) && i.trackSingleEvent("firstQuartile"), e == Math.floor(t / 2) && i.trackSingleEvent("midpoint"), e == Math.floor(3 * t / 4) && i.trackSingleEvent("thirdQuartile"), t - 1 <= e && i.trackSingleEvent("complete")
	},
	trackSingleEvent: function(e, i) {
		var n = this;
		if (void 0 !== n.vastOptions && null !== n.vastOptions) {
			var o = [];
			switch (o.length = 0, e) {
				case "start":
				case "firstQuartile":
				case "midpoint":
				case "thirdQuartile":
				case "complete":
					!1 === n.vastOptions.stopTracking[e] && (null !== n.vastOptions.tracking[e] && (o = n.vastOptions.tracking[e]), n.vastOptions.stopTracking[e] = !0);
					break;
				case "progress":
					n.vastOptions.tracking.progress[i].elements.forEach(function(e, t) {
						!1 === n.vastOptions.tracking.progress[i].stopTracking && n.vastOptions.tracking.progress[i].elements.length && (o = n.vastOptions.tracking.progress[i].elements), n.vastOptions.tracking.progress[i].stopTracking = !0
					});
					break;
				case "impression":
					void 0 !== n.vastOptions.impression && null !== n.vastOptions.impression && "unknown" != typeof n.vastOptions.impression.length && (o = n.vastOptions.impression)
			}
			n.callUris(o)
		}
	},
	completeNonLinearStatic: function(e) {
		var t = this;
		t.closeNonLinear(e), 0 == t.adFinished && (t.adFinished = !0, t.trackSingleEvent("complete")), clearInterval(t.nonLinearTracking)
	},
	createNonLinearStatic: function(e) {
		var t = this,
			i = document.getElementById(t.videoPlayerId);
		if (t.adPool.hasOwnProperty(e) && !0 !== t.adPool[e].error) {
			if (t.vastOptions = t.adPool[e], t.createBoard(e), !0 !== t.adList[e].error) {
				if (t.adFinished = !1, !t.vastOptions.vpaid) {
					t.trackSingleEvent("start");
					var n = t.adList[e].nonLinearDuration ? t.adList[e].nonLinearDuration : t.vastOptions.duration;
					t.nonLinearTracking = setInterval(function() {
						if (!0 !== t.adFinished) {
							var e = Math.floor(i.currentTime);
							t.scheduleTrackingEvent(e, n), n - 1 <= e && (t.adFinished = !0)
						}
					}, 400)
				}
				var o = parseInt(t.getCurrentTime()) + parseInt(n);
				t.scheduleTask({
					time: o,
					closeStaticAd: e
				})
			}
		} else t.announceLocalError(101)
	},
	compareVersion: function(e, t) {
		if ("string" != typeof e) return !1;
		if ("string" != typeof t) return !1;
		e = e.split("."), t = t.split(".");
		for (var i = Math.min(e.length, t.length), n = 0; n < i; ++n) {
			if (e[n] = parseInt(e[n], 10), t[n] = parseInt(t[n], 10), e[n] > t[n]) return 1;
			if (e[n] < t[n]) return -1
		}
		return e.length === t.length ? 0 : e.length < t.length ? -1 : 1
	},
	createVpaidNonLinearBoard: function(e) {
		var _ = this.adPool[e];
		this.loadVpaidNonlinearAssets = function(e) {
			var i = this;
			i.debugMessage("starting function switchPlayerToVpaidMode");
			var t = document.getElementById(i.videoPlayerId),
				n = i.adList[e].vAlign ? i.adList[e].vAlign : i.nonLinearVerticalAlign,
				o = i.adList[e].vpaidNonLinearCloseButton ? i.adList[e].vpaidNonLinearCloseButton : i.vpaidNonLinearCloseButton,
				a = i.videoPlayerId + "_" + e + "_fluid_vpaid_iframe",
				r = {};
			r.AdParameters = i.adPool[e].adParameters;
			var l = document.createElement("div");
			l.id = "fluid_vpaidNonLinear_" + e, l.className = "fluid_vpaidNonLinear_" + n, l.className += " fluid_vpaidNonLinear_ad", l.setAttribute("adListId", e);
			var s = Math.min(468, t.offsetWidth),
				d = Math.min(60, Math.floor(t.offsetHeight / 4));
			if (void 0 !== i.adList[e].size) {
				var u = i.adList[e].size.split("x");
				s = u[0], d = u[1]
			} else _.dimension.width && _.dimension.height && (s = _.dimension.width, d = _.dimension.height);
			if (l.style.width = "100%", l.style.height = d + "px", o) {
				var c = document.createElement("div");
				c.className = "fluid_vpaidNonLinear_frame", c.style.width = s + "px", c.style.height = d + "px", l.appendChild(c);
				var p = document.createElement("div");
				p.id = "close_button_" + i.videoPlayerId, p.className = "close_button", p.innerHTML = "", p.title = i.displayOptions.layoutControls.closeButtonCaption;
				var y = e;
				p.onclick = function(e) {
					if (i.hardStopVpaidAd(""), void 0 !== e.stopImmediatePropagation && e.stopImmediatePropagation(), i.adFinished = !0, "onPauseRoll" === i.adList[y].roll && i.onPauseRollAdPods[0]) {
						var t = i.onPauseRollAdPods[0];
						i.createBoard(t), i.currentOnPauseRollAd = i.onPauseRollAdPods[0], delete i.onPauseRollAdPods[0]
					}
					return !1
				}, c.appendChild(p)
			}
			var m = document.createElement("iframe");
			m.id = i.videoPlayerId + "non_linear_vapid_slot_iframe", m.className = "fluid_vpaid_nonlinear_slot_iframe", m.setAttribute("width", s + "px"), m.setAttribute("height", d + "px"), m.setAttribute("sandbox", "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"), m.setAttribute("frameborder", "0"), m.setAttribute("scrolling", "no"), m.setAttribute("marginwidth", "0"), m.setAttribute("marginheight", "0"), l.appendChild(m), t.parentNode.insertBefore(l, a.nextSibling);
			var v = m.contentWindow.document.createElement("div");
			m.contentWindow.document.body.appendChild(v), i.vastOptions.slotIframe = m, i.vastOptions.slotFrame = c;
			var g = {
				slot: v,
				videoSlot: t,
				videoSlotCanAutoPlay: !0
			};
			i.debugMessage(i.adList[e]);
			var f = i.vpaidAdUnit.handshakeVersion(i.vpaidVer);
			if (1 === i.compareVersion(i.vpaidVer, f)) return i.adList[e].error = !0, i.playMainVideoWhenVpaidFails(403), !1;
			t.loop = !1, t.removeAttribute("controls"), i.vpaidCallbackListenersAttach();
			var h = i.fullscreenMode ? "fullscreen" : "normal";
			i.vpaidAdUnit.initAd(s, d, h, 3e3, r, g), i.toggleLoader(!1), i.adList[e].played = !0, i.adFinished = !1
		}, this.loadVpaid(e, _.staticResource), this.debugMessage("create non linear vpaid")
	},
	createNonLinearBoard: function(e) {
		var i = this,
			t = i.adPool[e];
		i.adList[e].played = !0;
		var n = document.getElementById(i.videoPlayerId),
			o = n.clientWidth,
			a = (n.clientHeight, document.createElement("div")),
			r = i.adList[e].vAlign ? i.adList[e].vAlign : i.nonLinearVerticalAlign,
			l = new Image;
		l.src = t.staticResource, l.id = "fluid_nonLinear_imgCreative_" + e + "_" + i.videoPlayerId, l.onerror = function() {
			i.adList[e].error = !0, i.announceError(500)
		}, l.onload = function() {
			origHeight = void 0 !== i.adList[e].size ? (origWidth = i.adList[e].size.split("x")[0], i.adList[e].size.split("x")[1]) : t.dimension.width && t.dimension.height ? (origWidth = t.dimension.width, t.dimension.height) : (origWidth = l.width, l.height), newBannerHeight = origWidth > o ? (newBannerWidth = o - 5, origHeight * newBannerWidth / origWidth) : (newBannerWidth = origWidth, origHeight), "onPauseRoll" !== i.adList[e].roll && (document.getElementById("fluid_nonLinear_" + e).style.display = ""), img = document.getElementById(l.id), img.width = newBannerWidth, img.height = newBannerHeight, i.trackSingleEvent("impression")
		}, a.id = "fluid_nonLinear_" + e, a.className = "fluid_nonLinear_" + r, a.className += " fluid_nonLinear_ad", a.innerHTML = l.outerHTML, a.style.display = "none", a.onclick = function() {
			void 0 !== t.clickthroughUrl && window.open(t.clickthroughUrl), void 0 !== t.clicktracking && i.callUris([t.clicktracking])
		}, void 0 !== t.clickthroughUrl && (a.style.cursor = "pointer");
		var s = document.createElement("div");
		s.id = "close_button_" + i.videoPlayerId, s.className = "close_button", s.innerHTML = "", s.title = i.displayOptions.layoutControls.closeButtonCaption;
		var d = e;
		s.onclick = function(e) {
			if (this.parentElement.remove(i), void 0 !== e.stopImmediatePropagation && e.stopImmediatePropagation(), i.adFinished = !0, clearInterval(i.nonLinearTracking), "onPauseRoll" === i.adList[d].roll && i.onPauseRollAdPods[0]) {
				var t = i.onPauseRollAdPods[0];
				i.createBoard(t), i.currentOnPauseRollAd = i.onPauseRollAdPods[0], delete i.onPauseRollAdPods[0]
			}
			return !1
		}, a.appendChild(s), n.parentNode.insertBefore(a, n.nextSibling)
	},
	createBoard: function(e) {
		var t = this,
			i = t.adPool[e];
		if (i.vpaid) t.hardStopVpaidAd(""), t.createVpaidNonLinearBoard(e);
		else {
			if (void 0 === i.staticResource || -1 === t.supportedStaticTypes.indexOf(i.creativeType)) return t.adList[e].error = !0, void(t.vastOptions && void 0 !== t.vastOptions.errorUrl ? t.announceError(503) : t.announceLocalError(503));
			t.createNonLinearBoard(e)
		}
	},
	closeNonLinear: function(e) {
		var t = document.getElementById("fluid_nonLinear_" + e);
		t && t.remove()
	},
	rollGroupContainsLinear: function(e) {
		for (var t = !1, i = 0; i < e.length; i++)
			if (this.adList[e[i].id].adType && "linear" === this.adList[e[i].id].adType) {
				t = !0;
				break
			} return t
	},
	rollGroupContainsNonlinear: function(e) {
		for (var t = !1, i = 0; i < e.length; i++)
			if ("nonlinear" === this.adList[e[i].id].adType.toLowerCase()) {
				t = !0;
				break
			} return t
	},
	preRollFail: function() {
		var e = this.preRollAdPodsLength;
		this.preRollVastResolved++, this.preRollVastResolved === e && this.preRollAdsPlay()
	},
	preRollSuccess: function() {
		var e = this.preRollAdPodsLength;
		this.preRollVastResolved++, this.preRollVastResolved === e && this.preRollAdsPlay()
	},
	preRollAdsPlay: function() {
		var e = this,
			t = e.preRollAdPods,
			i = {
				linear: [],
				nonLinear: []
			};
		e.firstPlayLaunched = !0;
		for (var n = 0; n < t.length; n++) {
			if (!0 === e.adList[t[n]].played) return;
			"linear" === e.adList[t[n]].adType && i.linear.push(t[n]), "nonLinear" === e.adList[t[n]].adType && (i.nonLinear.push(t[n]), e.scheduleTask({
				time: 0,
				playRoll: "midRoll",
				adListId: i.nonLinear.shift()
			}))
		}
		0 < i.linear.length ? (e.toggleLoader(!0), e.playRoll(i.linear)) : e.playMainVideoWhenVastFails(900)
	},
	preRoll: function(e) {
		var t = fluidPlayerClass.getInstanceById(this.id),
			i = document.getElementById(this.getAttribute("id")),
			n = e.vastObj;
		i.removeEventListener(e.type, t.preRoll);
		var o = [];
		o[0] = e.type.replace("adId_", "");
		!0 !== t.adList[o[0]].played && (t.preRollAdPods.push(o[0]), t.preRollSuccess(n))
	},
	createAdMarker: function(e, t) {
		var i = document.getElementById(this.videoPlayerId + "_ad_markers_holder"),
			n = document.createElement("div");
		n.id = "ad_marker_" + this.videoPlayerId + "_" + e, n.className = "fluid_controls_ad_marker", n.style.left = t / this.mainVideoDuration * 100 + "%", this.isCurrentlyPlayingAd && (n.style.display = "none"), i.appendChild(n)
	},
	hideAdMarker: function(e) {
		var t = document.getElementById("ad_marker_" + this.videoPlayerId + "_" + e);
		t && (t.style.display = "none")
	},
	showAdMarkers: function() {
		for (var e = document.getElementById(this.videoPlayerId + "_ad_markers_holder").getElementsByClassName("fluid_controls_ad_marker"), t = "ad_marker_" + this.videoPlayerId + "_", i = 0; i < e.length; ++i) {
			var n = e[i],
				o = n.id.replace(t, "");
			!1 === this.adList[o].played && (n.style.display = "")
		}
	},
	hideAdMarkers: function() {
		for (var e = document.getElementById(this.videoPlayerId + "_ad_markers_holder").getElementsByClassName("fluid_controls_ad_marker"), t = 0; t < e.length; ++t) {
			e[t].style.display = "none"
		}
	},
	midRoll: function(e) {
		var t = fluidPlayerClass.getInstanceById(this.id);
		document.getElementById(this.getAttribute("id")).removeEventListener(e.type, t.midRoll);
		var i = e.type.replace("adId_", "");
		if (!0 !== t.adList[i].played) {
			var n = t.adList[i].timer;
			"string" == typeof n && -1 !== n.indexOf("%") && (n = n.replace("%", ""), n = Math.floor(t.mainVideoDuration / 100 * n)), t.displayOptions.vastOptions.showProgressbarMarkers && "nonLinear" === t.adList[i].adType && t.createAdMarker(i, n), t.scheduleTask({
				time: n,
				playRoll: "midRoll",
				adListId: i
			})
		}
	},
	postRoll: function(e) {
		var t = fluidPlayerClass.getInstanceById(this.id);
		document.getElementById(this.getAttribute("id")).removeEventListener(e.type, t.postRoll);
		var i = e.type.replace("adId_", "");
		t.scheduleTask({
			time: Math.floor(t.mainVideoDuration),
			playRoll: "postRoll",
			adListId: i
		})
	},
	onPauseRoll: function(e) {
		var t = fluidPlayerClass.getInstanceById(this.id);
		document.getElementById(this.getAttribute("id")).removeEventListener(e.type, t.onPauseRoll);
		var i = e.type.replace("adId_", "");
		if ("nonLinear" === t.adList[i].adType) {
			if (!t.adPool.hasOwnProperty(i) || !0 === t.adPool[i].error) return void t.announceLocalError(101);
			document.getElementsByClassName("fluid_nonLinear_ad")[0] ? t.onPauseRollAdPods.push(i) : (t.createBoard(i), t.currentOnPauseRollAd = i, onPauseAd = document.getElementById("fluid_nonLinear_" + i), onPauseAd && (onPauseAd.style.display = "none"))
		}
	},
	hasValidOnPauseAd: function() {
		var e = this.findRoll("onPauseRoll");
		return 0 != e.length && this.adList[e[0]] && !1 === this.adList[e[0]].error
	},
	toggleOnPauseAd: function() {
		var e = this,
			t = document.getElementById(this.videoPlayerId);
		if (e.hasValidOnPauseAd() && !e.isCurrentlyPlayingAd) {
			var i = e.findRoll("onPauseRoll");
			if ("" !== e.currentOnPauseRollAd) var n = e.currentOnPauseRollAd;
			else n = i[0];
			e.vastOptions = e.adPool[n];
			var o = document.getElementById("fluid_nonLinear_" + n);
			o && t.paused ? setTimeout(function() {
				o.style.display = "flex", e.adList[n].played = !1, e.trackingOnPauseNonLinearAd(n, "start")
			}, 500) : o && !t.paused && (o.style.display = "none", e.adFinished = !0, e.trackingOnPauseNonLinearAd(n, "complete"))
		}
	},
	trackingOnPauseNonLinearAd: function(e, t) {
		var i = this;
		i.adPool.hasOwnProperty(e) && !0 !== i.adPool[e].error ? (i.vastOptions = i.adPool[e], i.trackSingleEvent(t)) : i.announceLocalError(101)
	},
	getLinearAdsFromKeyTime: function(e) {
		for (var t = [], i = 0; i < e.length; i++) !1 === this.adList[e[i].adListId].played && t.push(e[i].adListId);
		return t
	},
	adKeytimePlay: function(e) {
		var t = this;
		if (t.timerPool[e] && !t.isCurrentlyPlayingAd) {
			var i = t.timerPool[e].closeStaticAd.length,
				n = t.timerPool[e].linear.length,
				o = t.timerPool[e].nonLinear.length;
			if (0 !== i || 0 !== n || 0 !== o) {
				if (0 < i) {
					for (var a = 0; a < i; a++) {
						var r = t.timerPool[e].closeStaticAd[a].closeStaticAd;
						!0 === t.adList[r].played && t.completeNonLinearStatic(r)
					}
					t.timerPool[e].closeStaticAd = []
				}
				if (0 < n) {
					var l = t.getLinearAdsFromKeyTime(t.timerPool[e].linear);
					if (0 < l.length) return t.playRoll(l), void(t.timerPool[e].linear = [])
				}
				if (0 < o)
					for (a = 0; a < o; a++) {
						r = t.timerPool[e].nonLinear[a].adListId, t.adPool[r];
						if (!1 === t.adList[r].played && !t.displayOptions.layoutControls.showCardBoardView) return t.createNonLinearStatic(r), t.displayOptions.vastOptions.showProgressbarMarkers && t.hideAdMarker(r), void t.timerPool[e].nonLinear.splice(a, 1)
					}
			} else delete t.timerPool[e]
		}
	},
	adTimer: function() {
		var t = this;
		1 != t.isTimer && (t.isTimer = !t.isTimer, t.timer = setInterval(function() {
			var e = Math.floor(t.getCurrentTime());
			t.adKeytimePlay(e)
		}, 800))
	},
	scheduleTask: function(e) {
		var t = this;
		t.timerPool.hasOwnProperty(e.time) || (t.timerPool[e.time] = {
			linear: [],
			nonLinear: [],
			closeStaticAd: []
		}), e.hasOwnProperty("playRoll") && "linear" === t.adList[e.adListId].adType ? t.timerPool[e.time].linear.push(e) : e.hasOwnProperty("playRoll") && "nonLinear" === t.adList[e.adListId].adType ? t.timerPool[e.time].nonLinear.push(e) : e.hasOwnProperty("closeStaticAd") && t.timerPool[e.time].closeStaticAd.push(e)
	},
	deleteVastAdElements: function() {
		var e = this;
		e.removeClickthrough(), e.removeSkipButton(), e.removeAdCountdown(), e.removeAdPlayingText(), e.removeCTAButton(), e.vastLogoBehaviour(!1)
	},
	switchToMainVideo: function() {
		var e = this;
		e.debugMessage("starting main video");
		var t = document.getElementById(e.videoPlayerId);
		t.src = e.originalSrc, e.initialiseStreamers();
		var i = void 0 !== t.mainVideoCurrentTime ? t.mainVideoCurrentTime : 0;
		if (t.hasOwnProperty("currentTime") && (t.currentTime = i), e.displayOptions.layoutControls.loop && (t.loop = !0), e.setCurrentTimeAndPlay(i, e.autoplayAfterAd), e.isCurrentlyPlayingAd = !1, e.deleteVastAdElements(), e.adFinished = !0, e.displayOptions.vastOptions.vastAdvanced.vastVideoEndedCallback(), e.vastOptions = null, e.setBuffering(), null !== document.getElementById(e.videoPlayerId + "_fluid_controls_progress_container"))
			for (var n = e.displayOptions.layoutControls.primaryColor ? e.displayOptions.layoutControls.primaryColor : "white", o = t.parentNode.getElementsByClassName("fluid_controls_currentprogress"), a = 0; a < o.length; a++) o[a].style.backgroundColor = n;
		t.removeEventListener("ended", e.onVastAdEnded), e.displayOptions.vastOptions.showProgressbarMarkers && e.showAdMarkers(), e.hasTitle() && (document.getElementById(e.videoPlayerId + "_title").style.display = "inline")
	},
	vastLogoBehaviour: function(e) {
		if (!this.displayOptions.layoutControls.logo.showOverAds) {
			var t = document.getElementById(this.videoPlayerId + "_logo"),
				i = document.getElementById(this.videoPlayerId + "_logo_image");
			if (!t || !i) return;
			var n = e ? "none" : "inline";
			t.style.display = n
		}
	},
	getNextAdPod: function() {
		var e = null;
		0 < this.temporaryAdPods.length && (e = this.temporaryAdPods.shift().id);
		return e
	},
	onVpaidEnded: function(e) {
		e && e.stopImmediatePropagation();
		var t = document.getElementById(this.videoPlayerId + "_fluid_vpaid_slot");
		this.vpaidAdUnit = null, clearInterval(this.getVPAIDAdInterval), t.remove(), this.checkForNextAd()
	},
	onVastAdEnded: function(e) {
		e && e.stopImmediatePropagation();
		var t = fluidPlayerClass.getInstanceById(this.id);
		t.deleteVastAdElements(), t.checkForNextAd()
	},
	checkForNextAd: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId),
			i = e.getNextAdPod();
		null === i ? (e.switchToMainVideo(), e.vastOptions = null, e.adFinished = !0) : (t.removeEventListener("ended", e.onVastAdEnded), e.isCurrentlyPlayingAd = !1, e.vastOptions = null, e.adFinished = !0, e.renderLinearAd(i, !1))
	},
	onMainVideoEnded: function(e) {
		var t = fluidPlayerClass.getInstanceById(this.id);
		if (e && !t.isCurrentlyPlayingAd && e.stopImmediatePropagation(), t.debugMessage("onMainVideoEnded is called"), !(t.isCurrentlyPlayingAd && t.autoplayAfterAd || (Math.floor(t.getCurrentTime()) >= Math.floor(t.mainVideoDuration) && (t.adKeytimePlay(Math.floor(t.mainVideoDuration)), clearInterval(t.timer)), !0 !== t.displayOptions.layoutControls.loop))) {
			var i = fluidPlayerClass.getInstanceIdByWrapperId(this.getAttribute("id"));
			fluidPlayerClass.getInstanceById(i);
			t.switchToMainVideo(), t.playPauseToggle(this)
		}
	},
	getCurrentTime: function() {
		return this.isCurrentlyPlayingAd ? this.mainVideoCurrentTime : document.getElementById(this.videoPlayerId).currentTime
	},
	addSkipButton: function() {
		var e = document.getElementById(this.videoPlayerId),
			t = document.createElement("div");
		t.id = "skip_button_" + this.videoPlayerId, t.className = "skip_button skip_button_disabled", t.innerHTML = this.displayOptions.vastOptions.skipButtonCaption.replace("[seconds]", this.vastOptions.skipoffset), document.getElementById("fluid_video_wrapper_" + this.videoPlayerId).appendChild(t), e.addEventListener("timeupdate", this.decreaseSkipOffset, !1)
	},
	addAdCountdown: function() {
		var e = document.getElementById(this.videoPlayerId),
			t = document.getElementById("fluid_video_wrapper_" + this.videoPlayerId),
			i = document.createElement("div"),
			n = this.pad(parseInt(this.currentVideoDuration / 60)) + ":" + this.pad(parseInt(this.currentVideoDuration % 60)),
			o = parseInt(n);
		i.id = "ad_countdown" + this.videoPlayerId, i.className = "ad_countdown", i.innerHTML = "<span class='ad_timer_prefix'>Ad - </span>" + o, t.appendChild(i), e.addEventListener("timeupdate", this.decreaseAdCountdown, !1), t.addEventListener("mouseover", function() {
			i.style.display = "none"
		}, !1)
	},
	decreaseAdCountdown: function() {
		var e = fluidPlayerClass.getInstanceById(this.id),
			t = parseInt(e.currentVideoDuration) - parseInt(this.currentTime),
			i = document.getElementById("ad_countdown" + e.videoPlayerId);
		i ? i.innerHTML = "<span class='ad_timer_prefix'>Ad - </span> " + e.pad(parseInt(t / 60)) + ":" + e.pad(parseInt(t % 60)) : this.removeEventListener("timeupdate", e.decreaseAdCountdown)
	},
	removeAdCountdown: function() {
		var e = document.getElementById("ad_countdown" + this.videoPlayerId);
		e && e.parentElement.removeChild(e)
	},
	toggleAdCountdown: function(e) {
		var t = document.getElementById("ad_countdown" + this.videoPlayerId);
		t && (t.style.display = e ? "inline-block" : "none")
	},
	addAdPlayingText: function(e) {
		var t = document.createElement("div");
		t.id = this.videoPlayerId + "_fluid_ad_playing", this.displayOptions.layoutControls.primaryColor && (t.style.backgroundColor = this.displayOptions.layoutControls.primaryColor, t.style.opacity = 1), t.className = "fluid_ad_playing", t.innerText = e, document.getElementById("fluid_video_wrapper_" + this.videoPlayerId).appendChild(t)
	},
	positionTextElements: function(e) {
		var t = this,
			i = ["top left", "top right", "bottom left", "bottom right"],
			n = document.getElementById("skip_button_" + t.videoPlayerId),
			o = document.getElementById(t.videoPlayerId + "_fluid_ad_playing"),
			a = document.getElementById(t.videoPlayerId + "_fluid_cta"),
			r = 0,
			l = 0,
			s = !1,
			d = 0,
			u = [],
			c = {
				top: {
					left: {
						h: 34,
						v: 34
					},
					right: {
						h: 0,
						v: 34
					}
				},
				bottom: {
					left: {
						h: 34,
						v: 50
					},
					right: {
						h: 0,
						v: 50
					}
				}
			};
		null !== n && (d = n.offsetHeight + 8, document.getElementById("fluid_video_wrapper_" + t.videoPlayerId).classList.contains("mobile") && (c.bottom.left.v = 75, c.bottom.right.v = 75));
		if (null !== a) {
			var p = t.displayOptions.vastOptions.adCTATextPosition.toLowerCase(); - 1 == i.indexOf(p) && (console.log('[FP Error] Invalid position for CTAText. Reverting to "bottom right"'), p = "bottom right"), s = "bottom" == (u = p.split(" "))[0], a.style[u[0]] = c[u[0]][u[1]].v + "px", a.style[u[1]] = c[u[0]][u[1]].h + "px", s && "right" == u[1] && (a.style[u[0]] = c[u[0]][u[1]].v + d + "px"), r = a.offsetHeight + 8 + "px"
		}
		if (null !== o) {
			var y = null !== e.adTextPosition ? e.adTextPosition.toLowerCase() : this.displayOptions.vastOptions.adTextPosition.toLowerCase(); - 1 == i.indexOf(y) && (console.log('[FP Error] Invalid position for adText. Reverting to "top left"'), y = "top left");
			var m = y.split(" ");
			o.style[m[0]] = c[m[0]][m[1]].v + "px", o.style[m[1]] = c[m[0]][m[1]].h + "px", l = o.offsetHeight + 8 + "px"
		}
		0 < r && 0 < l && p == y && (s ? "right" == u[1] ? o.style.bottom = c[m[0]][m[1]].v + d + r + "px" : o.style.bottom = c[m[0]][m[1]].v + r + "px" : a.style.top = c[u[0]][u[1]].v + l + "px")
	},
	removeAdPlayingText: function() {
		var e = document.getElementById(this.videoPlayerId + "_fluid_ad_playing");
		e && e.parentElement.removeChild(e)
	},
	addCTAButton: function(e) {
		var t = this;
		if (e) {
			var i = document.getElementById(this.videoPlayerId),
				n = document.createElement("div");
			n.id = this.videoPlayerId + "_fluid_cta", n.className = "fluid_ad_cta";
			var o = document.createElement("span");
			o.innerHTML = this.displayOptions.vastOptions.adCTAText + '<br/><span class="add_icon_clickthrough">' + e + "</span>", n.addEventListener("click", function() {
				return i.paused || i.pause(), window.open(t.vastOptions.clickthroughUrl, "_blank").focus(), !0
			}, !1), n.appendChild(o), document.getElementById("fluid_video_wrapper_" + this.videoPlayerId).appendChild(n)
		}
	},
	removeCTAButton: function() {
		var e = document.getElementById(this.videoPlayerId + "_fluid_cta");
		e && e.parentElement.removeChild(e)
	},
	decreaseSkipOffset: function() {
		var e = this,
			t = fluidPlayerClass.getInstanceById(e.id),
			i = t.vastOptions.skipoffset - Math.floor(e.currentTime),
			n = document.getElementById("skip_button_" + t.videoPlayerId);
		n ? 1 <= i ? n.innerHTML = t.displayOptions.vastOptions.skipButtonCaption.replace("[seconds]", i) : (n.innerHTML = '<a href="javascript:;" id="skipHref_' + t.videoPlayerId + '" onclick="fluidPlayerClass.getInstanceById(\'' + t.videoPlayerId + "').pressSkipButton(); return false;\">" + t.displayOptions.vastOptions.skipButtonClickCaption + "</a>", n.className = n.className.replace(/\bskip_button_disabled\b/, ""), e.removeEventListener("timeupdate", t.decreaseSkipOffset)) : (i = 0, e.removeEventListener("timeupdate", e.decreaseSkipOffset))
	},
	pressSkipButton: function() {
		this.removeSkipButton(), this.removeAdPlayingText(), this.removeCTAButton();
		var e = fluidPlayerClass.getInstanceById(this.videoPlayerId);
		if (e.vastOptions.vpaid) e.skipVpaidAd();
		else {
			this.displayOptions.vastOptions.vastAdvanced.vastVideoSkippedCallback();
			var t = document.createEvent("Event");
			t.initEvent("ended", !1, !0), document.getElementById(this.videoPlayerId).dispatchEvent(t)
		}
	},
	removeSkipButton: function() {
		var e = document.getElementById("skip_button_" + this.videoPlayerId);
		e && e.parentElement.removeChild(e)
	},
	addClickthroughLayer: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId),
			i = document.getElementById("fluid_video_wrapper_" + e.videoPlayerId),
			n = document.createElement("div");
		n.className = "vast_clickthrough_layer", n.id = "vast_clickthrough_layer_" + e.videoPlayerId, n.setAttribute("style", "position: absolute; cursor: pointer; top: 0; left: 0; width: " + t.offsetWidth + "px; height: " + t.offsetHeight + "px;"), i.appendChild(n);

		function o() {
			window.open(e.vastOptions.clickthroughUrl), void 0 !== e.vastOptions.clicktracking && e.callUris(e.vastOptions.clicktracking)
		}
		var a = document.getElementById("vast_clickthrough_layer_" + e.videoPlayerId),
			r = "iPhone" === e.mobileInfo.device && !1 !== e.mobileInfo.userOsMajor && e.mobileInfo.userOsMajor <= 9;
		a.onclick = function() {
			t.paused ? r && !e.suppressClickthrough ? (o(), e.suppressClickthrough = !0) : t.play() : (o(), t.pause())
		}
	},
	removeClickthrough: function() {
		var e = document.getElementById("vast_clickthrough_layer_" + this.videoPlayerId);
		e && e.parentNode.removeChild(e)
	},
	getCurrentSrc: function() {
		var e = document.getElementById(this.videoPlayerId).getElementsByTagName("source");
		return e.length ? e[0].getAttribute("src") : null
	},
	getCurrentSrcType: function() {
		var e = document.getElementById(this.videoPlayerId).getElementsByTagName("source");
		if (e.length)
			for (var t = 0; t < e.length; t++)
				if (e[t].getAttribute("src") == this.originalSrc) return e[t].getAttribute("type");
		return null
	},
	convertTimeStringToSeconds: function(e) {
		if (e && e.match(/^(\d){2}(:[0-5][0-9]){2}(.(\d){1,3})?$/)) {
			var t = e.split(":");
			return 3600 * parseInt(t[0], 10) + 60 * parseInt(t[1], 10) + parseInt(t[2], 10)
		}
		return !1
	},
	onRecentWaiting: function() {
		var e = fluidPlayerClass.getInstanceById(this.id);
		e.recentWaiting = !0, setTimeout(function() {
			e.recentWaiting = !1
		}, 1e3)
	},
	onFluidPlayerPause: function() {
		var t = this;
		setTimeout(function() {
			if (!fluidPlayerClass.getInstanceById(t.id).recentWaiting) {
				var e = document.createEvent("CustomEvent");
				e.initEvent("fluidplayerpause", !1, !0), t.dispatchEvent(e)
			}
		}, 100)
	},
	checkShouldDisplayVolumeBar: function() {
		return "iOS" !== fluidPlayerClass.getMobileOs().userOs
	},
	generateCustomControlTags: function() {
		return '<div class="fluid_controls_left"> <div id="' + this.videoPlayerId + '_fluid_control_playpause" class="fluid_button fluid_button_play fluid_control_playpause"></div></div><div id="' + this.videoPlayerId + '_fluid_controls_progress_container" class="fluid_controls_progress_container fluid_slider"> <div class="fluid_controls_progress"> <div id="' + this.videoPlayerId + '_vast_control_currentprogress" class="fluid_controls_currentprogress"> <div id="' + this.videoPlayerId + '_vast_control_currentpos" class="fluid_controls_currentpos"></div> </div> </div> <div id="' + this.videoPlayerId + '_buffered_amount" class="fluid_controls_buffered"></div> <div id="' + this.videoPlayerId + '_ad_markers_holder" class="fluid_controls_ad_markers_holder"></div></div><div class="fluid_controls_right"> <div id="' + this.videoPlayerId + '_fluid_control_fullscreen" class="fluid_button fluid_control_fullscreen fluid_button_fullscreen"></div> <div id="' + this.videoPlayerId + '_fluid_control_theatre" class="fluid_button fluid_control_theatre fluid_button_theatre"></div> <div id="' + this.videoPlayerId + '_fluid_control_cardboard" class="fluid_button fluid_control_cardboard fluid_button_cardboard"></div> <div id="' + this.videoPlayerId + '_fluid_control_video_source" class="fluid_button fluid_button_video_source"></div> <div id="' + this.videoPlayerId + '_fluid_control_playback_rate" class="fluid_button fluid_button_playback_rate"></div> <div id="' + this.videoPlayerId + '_fluid_control_download" class="fluid_button fluid_button_download"></div> <div id="' + this.videoPlayerId + '_fluid_control_volume_container" class="fluid_control_volume_container fluid_slider"> <div id="' + this.videoPlayerId + '_fluid_control_volume" class="fluid_control_volume"> <div id="' + this.videoPlayerId + '_fluid_control_currentvolume" class="fluid_control_currentvolume"> <div id="' + this.videoPlayerId + '_fluid_control_volume_currentpos" class="fluid_control_volume_currentpos"></div> </div> </div> </div> <div id="' + this.videoPlayerId + '_fluid_control_mute" class="fluid_button fluid_button_volume fluid_control_mute"></div> <div id="' + this.videoPlayerId + '_fluid_control_duration" class="fluid_control_duration fluid_fluid_control_duration">00:00 / 00:00</div></div>'
	},
	controlPlayPauseToggle: function(e) {
		var t = fluidPlayerClass.getInstanceById(e),
			i = (r = document.getElementById(t.videoPlayerId)).parentNode.getElementsByClassName("fluid_control_playpause"),
			n = document.getElementById(e + "context_option_play"),
			o = r.parentNode.getElementsByClassName("fluid_controls_container"),
			a = document.getElementById(t.videoPlayerId + "_logo"),
			r = document.getElementById(t.videoPlayerId);
		if (document.getElementById(e + "_fluid_initial_play") && (document.getElementById(e + "_fluid_initial_play").style.display = "none", document.getElementById(e + "_fluid_initial_play_button").style.opacity = "1"), r.paused) {
			for (l = 0; l < i.length; l++) i[l].className = i[l].className.replace(/\bfluid_button_pause\b/g, "fluid_button_play");
			for (l = 0; l < o.length; l++) o[l].classList.add("initial_controls_show");
			this.isCurrentlyPlayingAd && t.displayOptions.vastOptions.showPlayButton && (document.getElementById(e + "_fluid_initial_play").style.display = "block", document.getElementById(e + "_fluid_initial_play_button").style.opacity = "1"), a && a.classList.add("initial_controls_show"), null !== n && (n.innerHTML = this.displayOptions.captions.play)
		} else {
			for (var l = 0; l < i.length; l++) i[l].className = i[l].className.replace(/\bfluid_button_play\b/g, "fluid_button_pause");
			for (var l = 0; l < o.length; l++) o[l].classList.remove("initial_controls_show");
			a && a.classList.remove("initial_controls_show"), null !== n && (n.innerHTML = this.displayOptions.captions.pause)
		}
	},
	playPauseAnimationToggle: function(e) {
		if (!this.isCurrentlyPlayingAd && this.displayOptions.layoutControls.playPauseAnimation && !this.isSwitchingSource) {
			videoPlayerId = this.videoPlayerId, e ? (document.getElementById(videoPlayerId + "_fluid_state_button").classList.remove("fluid_initial_pause_button"), document.getElementById(videoPlayerId + "_fluid_state_button").classList.add("fluid_initial_play_button")) : (document.getElementById(videoPlayerId + "_fluid_state_button").classList.remove("fluid_initial_play_button"), document.getElementById(videoPlayerId + "_fluid_state_button").classList.add("fluid_initial_pause_button")), document.getElementById(videoPlayerId + "_fluid_initial_play").classList.add("transform-active");
			var t = videoPlayerId;
			setTimeout(function() {
				document.getElementById(t + "_fluid_initial_play").classList.remove("transform-active")
			}, 800)
		}
	},
	contolProgressbarUpdate: function(e) {
		for (var t = fluidPlayerClass.getInstanceById(e), i = document.getElementById(e), n = i.parentNode.getElementsByClassName("fluid_controls_currentprogress"), o = 0; o < n.length; o++) n[o].style.width = i.currentTime / t.currentVideoDuration * 100 + "%"
	},
	formatTime: function(e) {
		var t = new Date(1e3 * e),
			i = this.pad(t.getUTCHours()),
			n = this.pad(t.getUTCMinutes()),
			o = this.pad(t.getSeconds());
		if (1 <= i) var a = i + ":" + n + ":" + o;
		else a = n + ":" + o;
		return a
	},
	contolDurationUpdate: function(e) {
		for (var t = fluidPlayerClass.getInstanceById(e), i = document.getElementById(e), n = t.formatTime(i.currentTime) + " / " + t.formatTime(t.currentVideoDuration), o = i.parentNode.getElementsByClassName("fluid_control_duration"), a = 0; a < o.length; a++) o[a].innerHTML = n
	},
	pad: function(e) {
		return e < 10 ? "0" + e : e
	},
	contolVolumebarUpdate: function(e) {
		var t = fluidPlayerClass.getInstanceById(e),
			i = document.getElementById(e),
			n = document.getElementById(e + "_fluid_control_currentvolume"),
			o = document.getElementById(e + "_fluid_control_volume_currentpos"),
			a = document.getElementById(e + "_fluid_control_volume").clientWidth,
			r = o.clientWidth,
			l = i.parentNode.getElementsByClassName("fluid_control_mute"),
			s = document.getElementById(e + "context_option_mute");
		if (i.volume && (t.latestVolume = i.volume, t.fluidStorage.fluidMute = !1), i.volume && !i.muted) {
			for (var d = 0; d < l.length; d++) l[d].className = l[d].className.replace(/\bfluid_button_mute\b/g, "fluid_button_volume");
			null !== s && (s.innerHTML = this.displayOptions.captions.mute)
		} else {
			for (d = 0; d < l.length; d++) l[d].className = l[d].className.replace(/\bfluid_button_volume\b/g, "fluid_button_mute");
			null !== s && (s.innerHTML = this.displayOptions.captions.unmute)
		}
		n.style.width = i.volume * a + "px", o.style.left = i.volume * a - r / 2 + "px"
	},
	muteToggle: function(e) {
		var t = fluidPlayerClass.getInstanceById(e),
			i = document.getElementById(e);
		i.volume && !i.muted ? (i.volume = 0, i.muted = !0) : (i.volume = t.latestVolume, i.muted = !1), this.fluidStorage.fluidVolume = t.latestVolume, this.fluidStorage.fluidMute = i.muted
	},
	checkFullscreenSupport: function(e) {
		var t = document.getElementById(e),
			i = document.getElementById(this.videoPlayerId);
		return t.mozRequestFullScreen ? {
			goFullscreen: "mozRequestFullScreen",
			exitFullscreen: "mozCancelFullScreen",
			isFullscreen: "mozFullScreenElement"
		} : t.webkitRequestFullscreen ? {
			goFullscreen: "webkitRequestFullscreen",
			exitFullscreen: "webkitExitFullscreen",
			isFullscreen: "webkitFullscreenElement"
		} : t.msRequestFullscreen ? {
			goFullscreen: "msRequestFullscreen",
			exitFullscreen: "msExitFullscreen",
			isFullscreen: "msFullscreenElement"
		} : t.requestFullscreen ? {
			goFullscreen: "requestFullscreen",
			exitFullscreen: "exitFullscreen",
			isFullscreen: "fullscreenElement"
		} : !!i.webkitSupportsFullscreen && {
			goFullscreen: "webkitEnterFullscreen",
			exitFullscreen: "webkitExitFullscreen",
			isFullscreen: "webkitDisplayingFullscreen"
		}
	},
	fullscreenOff: function(e, t) {
		for (var i = 0; i < e.length; i++) e[i].className = e[i].className.replace(/\bfluid_button_fullscreen_exit\b/g, "fluid_button_fullscreen");
		null !== t && (t.innerHTML = "Fullscreen"), this.fullscreenMode = !1
	},
	fullscreenOn: function(e, t) {
		for (var i = 0; i < e.length; i++) e[i].className = e[i].className.replace(/\bfluid_button_fullscreen\b/g, "fluid_button_fullscreen_exit");
		null !== t && (t.innerHTML = this.displayOptions.captions.exitFullscreen), this.fullscreenMode = !0
	},
	fullscreenToggle: function() {
		fluidPlayerClass.activeVideoPlayerId = this.videoPlayerId;
		var e = document.getElementById(this.videoPlayerId),
			t = document.getElementById("fluid_video_wrapper_" + this.videoPlayerId),
			i = this.checkFullscreenSupport("fluid_video_wrapper_" + this.videoPlayerId),
			n = e.parentNode.getElementsByClassName("fluid_control_fullscreen"),
			o = document.getElementById(this.videoPlayerId + "context_option_fullscreen");
		if (this.theatreMode && this.theatreToggle(), i) switch (i.goFullscreen) {
			case "webkitEnterFullscreen":
				e[i.isFullscreen] || (functionNameToExecute = "videoPlayerTag." + i.goFullscreen + "();", this.fullscreenOn(n, o), new Function("videoPlayerTag", functionNameToExecute)(e));
				break;
			default:
				null === document[i.isFullscreen] ? (functionNameToExecute = "videoPlayerTag." + i.goFullscreen + "();", this.fullscreenOn(n, o)) : (functionNameToExecute = "document." + i.exitFullscreen + "();", this.fullscreenOff(n, o)), new Function("videoPlayerTag", functionNameToExecute)(t)
		} else - 1 !== t.className.search(/\bpseudo_fullscreen\b/g) ? (t.className = t.className.replace(/\bpseudo_fullscreen\b/g, ""), this.fullscreenOff(n, o)) : (t.className += " pseudo_fullscreen", this.fullscreenOn(n, o));
		this.resizeVpaidAuto()
	},
	findClosestParent: function(e, t) {
		var i, n;
		if (["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].some(function(e) {
				return "function" == typeof document.body[e] && (i = e, !0)
			}), e[i](t)) return e;
		for (; e;) {
			if ((n = e.parentElement) && n[i](t)) return n;
			e = n
		}
		return null
	},
	getTranslateX: function(e) {
		var t = null;
		try {
			var i = e.style.transform.match(/translate3d\((-?\d+px,\s?){2}-?\d+px\)/);
			i && i.length && (t = i[0].replace("translate3d(", "").replace(")", "").replace(/\s/g, "").replace(/px/g, "").split(","))
		} catch (e) {
			t = null
		}
		return t && 3 === t.length ? parseInt(t[0]) : 0
	},
	getEventOffsetX: function(e, t) {
		for (var i = 0, n = 0; t && !isNaN(t.offsetLeft);) n = fluidPlayerClass.getTranslateX(t), "BODY" === t.tagName ? i += t.offsetLeft + t.clientLeft + n - (t.scrollLeft || document.documentElement.scrollLeft) : i += t.offsetLeft + t.clientLeft + n - t.scrollLeft, t = t.offsetParent;
		return (void 0 !== e.touches && void 0 !== e.touches[0] ? e.touches[0].clientX : e.clientX) - i
	},
	getEventOffsetY: function(e, t) {
		var i = 1,
			n = fluidPlayerClass.findClosestParent(t, 'div[id^="fluid_video_wrapper_"]');
		if (n) {
			var o = n.id.replace("fluid_video_wrapper_", ""),
				a = fluidPlayerClass.checkFullscreenSupport("fluid_video_wrapper_" + o);
			a && document[a.isFullscreen] && (i = 0)
		}
		for (var r = 0; t && !isNaN(t.offsetTop);) "BODY" === t.tagName ? r += t.offsetTop - (t.scrollTop || document.documentElement.scrollTop) * i : r += t.offsetTop - t.scrollTop * i, t = t.offsetParent;
		return e.clientY - r
	},
	onProgressbarMouseDown: function(i, e) {
		var n, o = fluidPlayerClass.getInstanceById(i);
		if (o.displayOptions.layoutControls.playPauseAnimation = !1, n = o.displayOptions.layoutControls.showCardBoardView ? fluidPlayerClass.getEventOffsetX(e, e.srcElement.parentNode) : fluidPlayerClass.getEventOffsetX(e, document.getElementById(i + "_fluid_controls_progress_container")), !o.isCurrentlyPlayingAd) {
			o.fluidPseudoPause = !0;
			var a = document.getElementById(i),
				r = a.paused;
			r || a.pause(), document.addEventListener("mouseup", d), document.addEventListener("touchend", d), document.addEventListener("mousemove", s), document.addEventListener("touchmove", s)
		}

		function l(e, t) {
			var i = document.getElementById(e + "_fluid_controls_progress_container").clientWidth;
			i && (a.currentTime = o.currentVideoDuration * t / i)
		}

		function s(e) {
			var t = fluidPlayerClass.getEventOffsetX(e, e.srcElement.parentNode);
			n = NaN, l(i, t), o.contolProgressbarUpdate(o.videoPlayerId), o.contolDurationUpdate(o.videoPlayerId)
		}

		function d(e) {
			document.removeEventListener("mousemove", s), document.removeEventListener("touchmove", s), document.removeEventListener("mouseup", d), document.removeEventListener("touchend", d);
			var t = fluidPlayerClass.getEventOffsetX(e, e.srcElement.parentNode);
			isNaN(t) && !isNaN(n) && (t = n), isNaN(t) || l(i, t), r || o.play(), o.initialAnimationSet && setTimeout(function() {
				o.displayOptions.layoutControls.playPauseAnimation = o.initialAnimationSet
			}, 200), o.fluidPseudoPause = !1
		}
	},
	onVolumebarMouseDown: function(i) {
		function n(e, t) {
			var i = document.getElementById(e),
				n = document.getElementById(e + "_fluid_control_volume_container").clientWidth,
				o = fluidPlayerClass.getInstanceById(e);
			if (n) {
				var a = t / n;
				a < .05 ? (a = 0, i.muted = !0) : .95 < a && (a = 1), i.muted && 0 < a && (i.muted = !1), o.setVolume(a)
			}
		}

		function o(e) {
			var t = fluidPlayerClass.getEventOffsetX(e, document.getElementById(i + "_fluid_control_volume_container"));
			n(i, t)
		}

		function a(e) {
			document.removeEventListener("mousemove", o), document.removeEventListener("touchmove", o), document.removeEventListener("mouseup", a), document.removeEventListener("touchend", a);
			var t = fluidPlayerClass.getEventOffsetX(e, document.getElementById(i + "_fluid_control_volume_container"));
			isNaN(t) || n(i, t)
		}
		document.addEventListener("mouseup", a), document.addEventListener("touchend", a), document.addEventListener("mousemove", o), document.addEventListener("touchmove", o)
	},
	setVastList: function() {
		function e(e) {
			var t = !1;
			switch (e.roll) {
				case "midRoll":
					void 0 === e.timer && (t = !0)
			}
			return t
		}
		var t, i, n = this,
			o = {},
			a = {
				preRoll: [],
				postRoll: [],
				midRoll: [],
				onPauseRoll: []
			},
			r = {
				id: null,
				roll: null,
				played: !1,
				vastLoaded: !1,
				error: !1,
				adText: null,
				adTextPosition: null
			},
			l = 0;
		if (n.displayOptions.vastOptions.hasOwnProperty("adList"))
			for (var s in n.displayOptions.vastOptions.adList)
				if (adItem = n.displayOptions.vastOptions.adList[s], t = adItem, i = void 0, i = !1, t.vastTag || (n.announceLocalError(102, '"vastTag" property is missing from adList.'), i = !0), t.roll || (n.announceLocalError(102, '"roll" is missing from adList.'), i = !0), -1 === n.availableRolls.indexOf(t.roll) && (n.announceLocalError(102, "Only " + n.availableRolls.join(",") + " rolls are supported."), i = !0), t.size && -1 === n.supportedNonLinearAd.indexOf(t.size) && (n.announceLocalError(102, "Only " + n.supportedNonLinearAd.join(",") + " size are supported."), i = !0), i) n.announceLocalError(102, "Wrong adList parameters.");
				else {
					var d = "ID" + l;
					o[d] = Object.assign({}, r), o[d] = Object.assign(o[d], n.displayOptions.vastOptions.adList[s]), "midRoll" == adItem.roll && (o[d].error = e("midRoll", adItem)), o[d].id = d, l++
				} Object.keys(o).map(function(e) {
			o[e].roll.toLowerCase() === "preRoll".toLowerCase() ? a.preRoll.push(o[e]) : o[e].roll.toLowerCase() === "midRoll".toLowerCase() ? a.midRoll.push(o[e]) : o[e].roll.toLowerCase() === "postRoll".toLowerCase() ? a.postRoll.push(o[e]) : o[e].roll.toLowerCase() === "onPauseRoll".toLowerCase() && a.onPauseRoll.push(o[e])
		}), n.adGroupedByRolls = a, n.adList = o
	},
	findRoll: function(e) {
		var t = [];
		if (t.length = 0, e && this.hasOwnProperty("adList")) {
			for (var i in this.adList) this.adList[i].roll == e && t.push(i);
			return t
		}
	},
	volumeChange: function(e, t) {
		var i = document.getElementById(e).volume;
		"asc" == t ? i += .05 : "desc" == t && (i -= .05), i < .05 ? i = 0 : .95 < i && (i = 1), this.setVolume(i)
	},
	currentTimeChange: function(e, t) {
		var i = fluidPlayerClass.getInstanceById(e);
		if (!i.isCurrentlyPlayingAd) {
			var n = document.getElementById(e);
			n.currentTime = i.getNewCurrentTimeValueByKeyCode(t, n.currentTime, n.duration)
		}
	},
	getNewCurrentTimeValueByKeyCode: function(e, t, i) {
		var n = t;
		switch (e) {
			case 37:
				n = (n -= 5) < 5 ? 0 : n;
				break;
			case 39:
				n = i - 5 < (n += 5) ? i : n;
				break;
			case 35:
				n = i;
				break;
			case 36:
				n = 0;
				break;
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
				if (e < 58 && 47 < e) n = i * (10 * (e - 48)) / 100
		}
		return n
	},
	handleMouseleave: function(e) {
		var t = fluidPlayerClass.getInstanceIdByWrapperId(this.getAttribute("id")),
			i = fluidPlayerClass.getInstanceById(t);
		void 0 !== e.clientX && document.getElementById("fluid_video_wrapper_" + t).contains(document.elementFromPoint(e.clientX, e.clientY)) || (i.hideControlBar.call(this), i.hideTitle.call(this))
	},
	handleMouseenterForKeyboard: function() {
		var i = fluidPlayerClass.getInstanceIdByWrapperId(this.getAttribute("id")),
			n = fluidPlayerClass.getInstanceById(i),
			o = document.getElementById(i);
		n.captureKey || (n.captureKey = function(e) {
			e.stopPropagation();
			var t = e.keyCode;
			switch (t) {
				case 70:
					n.fullscreenToggle(), e.preventDefault();
					break;
				case 13:
				case 32:
					n.playPauseToggle(o), e.preventDefault();
					break;
				case 77:
					n.muteToggle(i), e.preventDefault();
					break;
				case 38:
					n.volumeChange(i, "asc"), e.preventDefault();
					break;
				case 40:
					n.volumeChange(i, "desc"), e.preventDefault();
					break;
				case 37:
				case 39:
				case 35:
				case 36:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
					n.currentTimeChange(i, t), e.preventDefault()
			}
			return !1
		}, document.addEventListener("keydown", n.captureKey, !0))
	},
	keyboardControl: function() {
		var e = this;
		document.getElementById("fluid_video_wrapper_" + e.videoPlayerId).addEventListener("click", e.handleMouseenterForKeyboard, !1);
		var t = e.handleWindowClick.bind(e);
		e.destructors.push(function() {
			window.removeEventListener("click", t)
		}), window.addEventListener("click", t)
	},
	handleWindowClick: function(e) {
		var t = this.videoPlayerId,
			i = fluidPlayerClass.getInstanceById(t),
			n = document.getElementById("fluid_video_wrapper_" + t);
		n ? n.contains(e.target) || e.target.id === "skipHref_" + t || (document.removeEventListener("keydown", i.captureKey, !0), delete i.captureKey, i.theatreMode && !i.theatreModeAdvanced && i.theatreToggle()) : console.warn("Dangling click event listener should be collected for unknown wrapper " + t + ". Did you forget to call destroy on player instance?")
	},
	initialPlay: function() {
		var e = this,
			t = fluidPlayerClass.getInstanceById(e.id);
		if (e.addEventListener("playing", function() {
				t.toggleLoader(!1)
			}), e.addEventListener("timeupdate", function() {
				t.toggleLoader(!1)
			}), e.addEventListener("waiting", function() {
				t.toggleLoader(!0)
			}), !t.displayOptions.layoutControls.playButtonShowing) {
			document.getElementById(t.videoPlayerId + "_fluid_controls_container").classList.remove("initial_controls_show");
			var i = document.getElementById(t.videoPlayerId + "_logo");
			i && i.classList.remove("initial_controls_show")
		}
		t.firstPlayLaunched || (t.playPauseToggle(e), e.removeEventListener("play", t.initialPlay))
	},
	playPauseToggle: function(e) {
		var t = fluidPlayerClass.getInstanceById(e.id),
			i = !t.firstPlayLaunched,
			n = t.findRoll("preRoll");
		if (i && 0 != n.length) {
			var o = fluidPlayerClass.getBrowserVersion();
			t.isCurrentlyPlayingAd = !0, ("Safari" == o.browserName || !1 !== t.mobileInfo.userOs && "Android" == t.mobileInfo.userOs && "Google Chrome" == o.browserName) && (e.src = fluidPlayerScriptLocation + "blank.mp4", e.play(), this.playPauseAnimationToggle(!0)), t.firstPlayLaunched = !0, t.prepareVast("preRoll"), t.preRollAdPodsLength = n.length
		} else i && 0 == n.length && (t.firstPlayLaunched = !0, t.displayOptions.vastOptions.vastAdvanced.noVastVideoCallback()), e.paused ? (t.isCurrentlyPlayingAd && null !== t.vastOptions && t.vastOptions.vpaid ? t.resumeVpaidAd() : t.dashPlayer ? t.dashPlayer.play() : e.play(), this.playPauseAnimationToggle(!0)) : i || (t.isCurrentlyPlayingAd && null !== t.vastOptions && t.vastOptions.vpaid ? t.pauseVpaidAd() : e.pause(), this.playPauseAnimationToggle(!1)), t.toggleOnPauseAd();

		function a() {
			t.prepareVast("onPauseRoll"), t.prepareVast("postRoll"), t.prepareVast("midRoll")
		}
		if (i) {
			var r = document.getElementById(t.videoPlayerId + "_fluid_pseudo_poster");
			r && r.parentNode.removeChild(r), 0 < t.mainVideoDuration ? a() : e.addEventListener("mainVideoDurationSet", a)
		}
		t.adTimer();
		var l = document.getElementById(t.videoPlayerId + "_fluid_html_on_pause");
		l && !t.isCurrentlyPlayingAd && (e.paused ? l.style.display = "flex" : l.style.display = "none")
	},
	setCustomControls: function() {
		var t = this,
			e = document.getElementById(this.videoPlayerId);
		t.trackEvent(e.parentNode, "click", ".fluid_control_playpause", function() {
			t.firstPlayLaunched || e.removeEventListener("play", t.initialPlay), t.playPauseToggle(e)
		}, !1), document.getElementById(t.videoPlayerId).addEventListener("play", function() {
			t.controlPlayPauseToggle(t.videoPlayerId), t.contolVolumebarUpdate(t.videoPlayerId)
		}, !1), document.getElementById(t.videoPlayerId).addEventListener("fluidplayerpause", function() {
			t.controlPlayPauseToggle(t.videoPlayerId)
		}, !1), e.addEventListener("timeupdate", function() {
			t.contolProgressbarUpdate(t.videoPlayerId), t.contolDurationUpdate(t.videoPlayerId)
		});
		var i = fluidPlayerClass.getMobileOs().userOs ? "touchstart" : "mousedown";
		t.displayOptions.layoutControls.showCardBoardView ? t.trackEvent(e.parentNode, i, ".fluid_controls_progress_container", function(e) {
			t.onProgressbarMouseDown(t.videoPlayerId, e)
		}, !1) : document.getElementById(t.videoPlayerId + "_fluid_controls_progress_container").addEventListener(i, function(e) {
			t.onProgressbarMouseDown(t.videoPlayerId, e)
		}, !1), document.getElementById(t.videoPlayerId + "_fluid_control_volume_container").addEventListener(i, function(e) {
			t.onVolumebarMouseDown(t.videoPlayerId)
		}, !1), e.addEventListener("volumechange", function() {
			t.contolVolumebarUpdate(t.videoPlayerId)
		}), t.trackEvent(e.parentNode, "click", ".fluid_control_mute", function() {
			t.muteToggle(t.videoPlayerId)
		}), t.setBuffering(), t.trackEvent(e.parentNode, "click", ".fluid_control_fullscreen", function() {
			t.fullscreenToggle()
		}), t.displayOptions.layoutControls.allowTheatre && !t.isInIframe ? t.trackEvent(e.parentNode, "click", ".fluid_control_theatre", function() {
			t.theatreToggle(t.videoPlayerId)
		}) : document.getElementById(t.videoPlayerId + "_fluid_control_theatre").style.display = "none", e.addEventListener("ratechange", function() {
			t.isCurrentlyPlayingAd && (this.playbackRate = 1)
		})
	},
	createTimePositionPreview: function() {
		var a = this,
			r = document.getElementById(a.videoPlayerId);
		if (a.showTimeOnHover) {
			var e = document.getElementById(a.videoPlayerId + "_fluid_controls_progress_container"),
				t = document.createElement("div");
			t.id = a.videoPlayerId + "_fluid_timeline_preview", t.className = "fluid_timeline_preview", t.style.display = "none", t.style.position = "absolute", e.appendChild(t), document.getElementById(a.videoPlayerId + "_fluid_controls_progress_container").addEventListener("mousemove", function(e) {
				var t = document.getElementById(a.videoPlayerId + "_fluid_controls_progress_container"),
					i = t.clientWidth,
					n = document.getElementById(a.videoPlayerId + "_fluid_timeline_preview"),
					o = fluidPlayerClass.getEventOffsetX(e, t);
				hoverSecondQ = a.currentVideoDuration * o / i, showad = a.formatTime(hoverSecondQ), n.innerText = showad, n.style.display = "block", n.style.left = hoverSecondQ / r.duration * 100 + "%"
			}, !1), document.getElementById(a.videoPlayerId + "_fluid_controls_progress_container").addEventListener("mouseout", function() {
				document.getElementById(a.videoPlayerId + "_fluid_timeline_preview").style.display = "none"
			}, !1)
		}
	},
	setCustomContextMenu: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId),
			i = document.getElementById("fluid_video_wrapper_" + e.videoPlayerId),
			n = document.createElement("div");
		n.id = e.videoPlayerId + "_fluid_context_menu", n.className = "fluid_context_menu", n.style.display = "none", n.style.position = "absolute", n.innerHTML = '<ul> <li id="' + e.videoPlayerId + 'context_option_play">' + this.displayOptions.captions.play + '</li> <li id="' + e.videoPlayerId + 'context_option_mute">' + this.displayOptions.captions.mute + '</li> <li id="' + e.videoPlayerId + 'context_option_fullscreen">' + this.displayOptions.captions.fullscreen + '</li> <li id="' + e.videoPlayerId + 'context_option_homepage">Anup ' + e.version + "</li></ul>", t.parentNode.insertBefore(n, t.nextSibling), i.addEventListener("contextmenu", function(e) {
			e.preventDefault(), n.style.left = fluidPlayerClass.getEventOffsetX(e, t) + "px", n.style.top = fluidPlayerClass.getEventOffsetY(e, t) + "px", n.style.display = "block"
		}, !1), document.addEventListener("click", function(e) {
			e.target === t && 2 === e.button || (n.style.display = "none")
		}, !1);
		var o = document.getElementById(e.videoPlayerId + "context_option_play"),
			a = document.getElementById(e.videoPlayerId + "context_option_mute"),
			r = document.getElementById(e.videoPlayerId + "context_option_fullscreen"),
			l = document.getElementById(e.videoPlayerId + "context_option_homepage");
		o.addEventListener("click", function() {
			e.playPauseToggle(t)
		}, !1), a.addEventListener("click", function() {
			e.muteToggle(e.videoPlayerId)
		}, !1), r.addEventListener("click", function() {
			e.fullscreenToggle()
		}, !1), l.addEventListener("click", function() {
			window.open(e.homepage, "_blank").focus()
		}, !1)
	},
	setDefaultLayout: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId);
		document.getElementById("fluid_video_wrapper_" + e.videoPlayerId).className += " fluid_player_layout_" + e.displayOptions.layoutControls.layout, t.removeAttribute("controls"), e.setCustomContextMenu();
		var i = "";
		e.checkShouldDisplayVolumeBar() || (i = " no_volume_bar");
		var n = document.createElement("div");
		n.id = e.videoPlayerId + "_fluid_controls_container", n.className = "fluid_controls_container" + i, n.innerHTML = e.generateCustomControlTags(), t.parentNode.insertBefore(n, t.nextSibling);
		var o = document.createElement("div");
		o.className = "vast_video_loading", o.id = "vast_video_loading_" + e.videoPlayerId, o.style.display = "none";
		var a = e.displayOptions.layoutControls.primaryColor ? e.displayOptions.layoutControls.primaryColor : "white";
		document.getElementById(e.videoPlayerId + "_vast_control_currentprogress").style.backgroundColor = a, t.parentNode.insertBefore(o, t.nextSibling);
		var r = 100;
		e.displayOptions.layoutControls.doubleclickFullscreen && t.addEventListener("dblclick", function() {
			e.fullscreenToggle()
		}, !1);
		var l = setInterval(function() {
			r ? e.checkIfVolumebarIsRendered() ? (clearInterval(l), e.contolVolumebarUpdate(e.videoPlayerId)) : r-- : clearInterval(l)
		}, 100);
		e.initHtmlOnPauseBlock(), e.setCustomControls(), e.setupThumbnailPreview(), e.createTimePositionPreview(), e.posterImage(), e.initPlayButton(), e.setVideoPreload(), e.createPlaybackList(), e.createDownload()
	},
	checkIfVolumebarIsRendered: function() {
		var e = document.getElementById(this.videoPlayerId + "_fluid_control_volume_currentpos"),
			t = document.getElementById(this.videoPlayerId + "_fluid_control_volume").clientWidth;
		return e.clientWidth !== t
	},
	setLayout: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId),
			i = fluidPlayerClass.isTouchDevice() ? "touchend" : "click";
		document.getElementById(this.videoPlayerId).addEventListener(i, function() {
			e.playPauseToggle(t)
		}, !1), t.addEventListener("play", e.initialPlay, !1), this.setDefaultLayout()
	},
	handleFullscreen: function() {
		var t = this;
		void 0 === document.vastFullsreenChangeEventListenersAdded && (["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach(function(e) {
			"object" == typeof document["on" + e] && document.addEventListener(e, function(e) {
				t.recalculateAdDimensions(fluidPlayerClass.activeVideoPlayerId)
			}, !1)
		}), document.vastFullsreenChangeEventListenersAdded = !0)
	},
	setupThumbnailPreviewVtt: function() {
		var d = this;
		d.sendRequest(d.displayOptions.layoutControls.timelinePreview.file, !0, d.displayOptions.vastOptions.vastTimeout, function() {
			var e = this;
			if ((4 !== e.readyState || 200 === e.status) && 4 === e.readyState && 200 === e.status) {
				var t = e.responseText,
					i = (new WebVTTParser).parse(t);
				d.timelinePreviewData = function(e) {
					if (void 0 === e.cues || !e.cues.length) return [];
					for (var t = [], i = null, n = null, o = 0; o < e.cues.length; o++) {
						var a = 0,
							r = 0,
							l = 122.5,
							s = 69;
						2 === (i = e.cues[o].text.split("#")).length && 0 === i[1].indexOf("xywh=") && 4 === (n = (n = i[1].substring(5)).split(",")).length && (d.displayOptions.layoutControls.timelinePreview.spriteImage = !0, a = parseInt(n[0]), r = parseInt(n[1]), l = parseInt(n[2]), s = parseInt(n[3])), !d.displayOptions.layoutControls.timelinePreview.spriteRelativePath || -1 === d.displayOptions.layoutControls.timelinePreview.file.indexOf("/") || void 0 !== d.displayOptions.layoutControls.timelinePreview.sprite && "" != d.displayOptions.layoutControls.timelinePreview.sprite ? imageUrl = d.displayOptions.layoutControls.timelinePreview.sprite ? d.displayOptions.layoutControls.timelinePreview.sprite : i[0] : (imageUrl = d.displayOptions.layoutControls.timelinePreview.file.substring(0, d.displayOptions.layoutControls.timelinePreview.file.lastIndexOf("/")), imageUrl += "/" + i[0]), t.push({
							startTime: e.cues[o].startTime,
							endTime: e.cues[o].endTime,
							image: imageUrl,
							x: a,
							y: r,
							w: l,
							h: s
						})
					}
					return t
				}(i)
			}
		})
	},
	generateTimelinePreviewTags: function() {
		var e = document.getElementById(this.videoPlayerId + "_fluid_controls_progress_container"),
			t = document.createElement("div");
		t.id = this.videoPlayerId + "_fluid_timeline_preview_container", t.className = "fluid_timeline_preview_container", t.style.display = "none", t.style.position = "absolute", e.appendChild(t);
		var i = document.createElement("div");
		i.id = this.videoPlayerId + "_fluid_timeline_preview_container_shadow", i.className = "fluid_timeline_preview_container_shadow", i.style.position = "absolute", i.style.display = "none", i.style.opacity = 1, e.appendChild(i)
	},
	getThumbnailCoordinates: function(e) {
		var t = this;
		if (t.timelinePreviewData.length)
			for (var i = 0; i < t.timelinePreviewData.length; i++)
				if (e >= t.timelinePreviewData[i].startTime && e <= t.timelinePreviewData[i].endTime) return t.timelinePreviewData[i];
		return !1
	},
	drawTimelinePreview: function(e) {
		var t = this,
			i = document.getElementById(t.videoPlayerId + "_fluid_timeline_preview_container"),
			n = document.getElementById(t.videoPlayerId + "_fluid_timeline_preview_container_shadow"),
			o = document.getElementById(t.videoPlayerId + "_fluid_controls_progress_container"),
			a = o.clientWidth;
		if (t.isCurrentlyPlayingAd) "none" !== i.style.display && (i.style.display = "none");
		else {
			var r = fluidPlayerClass.getEventOffsetX(e, o),
				l = null;
			if (a) {
				l = t.currentVideoDuration * r / a;
				var s = t.getThumbnailCoordinates(l);
				n.style.width = a + "px", !(n.style.display = "block") !== s ? (i.style.width = s.w + "px", i.style.height = s.h + "px", n.style.height = s.h + "px", i.style.background = "url(" + s.image + ") no-repeat scroll -" + s.x + "px -" + s.y + "px", i.style.left = r - s.w / 2 + "px", i.style.display = "block", t.displayOptions.layoutControls.timelinePreview.spriteImage || (i.style.backgroundSize = "contain")) : i.style.display = "none"
			}
		}
	},
	setupThumbnailPreview: function() {
		var i = this;
		if (i.displayOptions.layoutControls.timelinePreview && "string" == typeof i.displayOptions.layoutControls.timelinePreview.file && "string" == typeof i.displayOptions.layoutControls.timelinePreview.type) {
			switch (i.displayOptions.layoutControls.timelinePreview.type) {
				case "VTT":
					fluidPlayerClass.requestScript(fluidPlayerScriptLocation + fluidPlayerClass.vttParserScript, i.setupThumbnailPreviewVtt.bind(this));
					var e = "mousemove",
						t = "mouseleave";
					i.mobileInfo.userOs && (e = "touchmove", t = "touchend"), document.getElementById(i.videoPlayerId + "_fluid_controls_progress_container").addEventListener(e, i.drawTimelinePreview.bind(i), !1), document.getElementById(i.videoPlayerId + "_fluid_controls_progress_container").addEventListener(t, function(e) {
						var t = document.getElementById(i.videoPlayerId + "_fluid_controls_progress_container");
						void 0 !== e.clientX && t.contains(document.elementFromPoint(e.clientX, e.clientY)) || (document.getElementById(i.videoPlayerId + "_fluid_timeline_preview_container").style.display = "none", document.getElementById(i.videoPlayerId + "_fluid_timeline_preview_container_shadow").style.display = "none")
					}, !1), i.generateTimelinePreviewTags()
			}
			i.showTimeOnHover = !1
		}
	},
	setupPlayerWrapper: function() {
		var e = document.getElementById(this.videoPlayerId),
			t = document.createElement("div");
		t.className = fluidPlayerClass.isTouchDevice() ? "fluid_video_wrapper mobile" : "fluid_video_wrapper", t.id = "fluid_video_wrapper_" + this.videoPlayerId, this.displayOptions.layoutControls.fillToContainer ? (t.style.width = "100%", t.style.height = "100%") : (t.style.height = e.clientHeight + "px", t.style.width = e.clientWidth + "px"), e.style.height = "100%", e.style.width = "100%", e.parentNode.insertBefore(t, e), t.appendChild(e)
	},
	onErrorDetection: function() {
		var e = fluidPlayerClass.getInstanceById(this.id);
		this.networkState === this.NETWORK_NO_SOURCE && e.isCurrentlyPlayingAd && e.playMainVideoWhenVastFails(401)
	},
	subtitleFetchParse: function(e) {
		var a = this;
		document.getElementById(a.videoPlayerId);
		a.sendRequest(e.url, !0, a.displayOptions.vastOptions.vastTimeout, function() {
			var e = this;
			if ((4 !== e.readyState || 200 === e.status) && 4 === e.readyState && 200 === e.status) {
				var t = e.responseText,
					i = new WebVTT.Parser(window, WebVTT.StringDecoder()),
					n = [],
					o = [];
				i.oncue = function(e) {
					n.push(e)
				}, i.onregion = function(e) {
					o.push(e)
				}, i.parse(t), i.flush(), a.subtitlesData = n
			}
		})
	},
	createSubtitlesSwitch: function() {
		var o = this,
			e = document.getElementById(o.videoPlayerId);
		if (o.subtitlesData = [], o.displayOptions.layoutControls.subtitlesEnabled) {
			var t = [];
			t.push({
				label: "OFF",
				url: "na",
				lang: "OFF"
			});
			var i = e.querySelectorAll("track");
			[].forEach.call(i, function(e) {
				"metadata" === e.kind && e.src && t.push({
					label: e.label,
					url: e.src,
					lang: e.srclang
				})
			}), o.subtitlesTracks = t;
			var n = document.getElementById(o.videoPlayerId + "_fluid_control_subtitles"),
				a = !1,
				r = document.createElement("div");
			r.id = o.videoPlayerId + "_fluid_control_subtitles_list", r.className = "fluid_subtitles_list", r.style.display = "none";
			var l = !0;
			o.subtitlesTracks.forEach(function(e) {
				var t = l ? "subtitle_selected" : "";
				l = !1;
				var i = document.createElement("div");
				i.id = "subtitle_" + o.videoPlayerId + "_" + e.label, i.className = "fluid_subtitle_list_item", i.innerHTML = '<span class="subtitle_button_icon ' + t + '"></span>' + e.label, i.addEventListener("click", function(e) {
					e.stopPropagation();
					for (var t = this, i = document.getElementsByClassName("subtitle_button_icon"), n = 0; n < i.length; n++) i[n].className = i[n].className.replace("subtitle_selected", "");
					t.firstChild.className += " subtitle_selected", o.subtitlesTracks.forEach(function(e) {
						e.label == t.innerText.replace(/(\r\n\t|\n|\r\t)/gm, "") && ("OFF" === e.label ? o.subtitlesData = [] : o.subtitleFetchParse(e))
					}), o.openCloseSubtitlesSwitch()
				}), r.appendChild(i), a = !0
			}), a ? (n.appendChild(r), n.addEventListener("click", function() {
				o.openCloseSubtitlesSwitch()
			})) : document.getElementById(o.videoPlayerId + "_fluid_control_subtitles").style.display = "none"
		} else document.getElementById(o.videoPlayerId + "_fluid_control_subtitles").style.display = "none";
		e.addEventListener("timeupdate", function() {
			o.renderSubtitles()
		})
	},
	renderSubtitles: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId),
			i = Math.floor(t.currentTime),
			n = !1,
			o = document.getElementById(e.videoPlayerId + "_fluid_subtitles_container");
		if (e.isCurrentlyPlayingAd) o.innerHTML = "";
		else {
			i = Math.floor(t.currentTime), n = !1, o = document.getElementById(e.videoPlayerId + "_fluid_subtitles_container");
			for (var a = 0; a < e.subtitlesData.length; a++) i >= e.subtitlesData[a].startTime && i <= e.subtitlesData[a].endTime && (o.innerHTML = "", o.appendChild(WebVTT.convertCueToDOMTree(window, e.subtitlesData[a].text)), n = !0);
			n || (o.innerHTML = "")
		}
	},
	openCloseSubtitlesSwitch: function() {
		var t = document.getElementById(this.videoPlayerId + "_fluid_control_subtitles_list"),
			i = document.getElementById(this.videoPlayerId + "_fluid_control_subtitles");
		if (this.isCurrentlyPlayingAd) t.style.display = "none";
		else if ("none" == t.style.display) {
			t.style.display = "block";
			var n = function(e) {
				i.removeEventListener("mouseleave", n), t.style.display = "none"
			};
			i.addEventListener("mouseleave", n)
		} else t.style.display = "none"
	},
	createSubtitles: function() {
		var e = document.getElementById(this.videoPlayerId),
			t = document.createElement("div");
		t.id = this.videoPlayerId + "_fluid_subtitles_container", t.className = "fluid_subtitles_container", e.parentNode.insertBefore(t, e.nextSibling), fluidPlayerClass.requestScript(fluidPlayerScriptLocation + fluidPlayerClass.subtitlesParseScript, this.createSubtitlesSwitch.bind(this))
	},
	createCardboardJoystickButton: function(e) {
		document.getElementById(this.videoPlayerId);
		var t = document.getElementById(this.videoPlayerId + "_fluid_vr_joystick_panel"),
			i = document.createElement("div");
		return i.id = this.videoPlayerId + "_fluid_vr_joystick_" + e, i.className = "fluid_vr_button fluid_vr_joystick_" + e, t.appendChild(i), i
	},
	cardboardRotateLeftRight: function(e) {
		var t = this,
			i = t.vrROTATION_POSITION,
			n = -t.vrROTATION_POSITION,
			o = {
				val: e < 1 ? i : n
			};
		new TWEEN.Tween(o).to({
			val: 0
		}, t.vrROTATION_SPEED).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function() {
			t.vrViewer.OrbitControls.rotateLeft(o.val)
		}).start()
	},
	cardboardRotateUpDown: function(e) {
		var t = this,
			i = t.vrROTATION_POSITION,
			n = -t.vrROTATION_POSITION,
			o = {
				val: e < 1 ? i : n
			};
		new TWEEN.Tween(o).to({
			val: 0
		}, t.vrROTATION_SPEED).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function() {
			t.vrViewer.OrbitControls.rotateUp(o.val)
		}).start()
	},
	createCardboardJoystick: function() {
		var e = this,
			t = (document.getElementById(e.videoPlayerId), document.getElementById(e.videoPlayerId + "_fluid_vr_container")),
			i = document.createElement("div");
		i.id = e.videoPlayerId + "_fluid_vr_joystick_panel", i.className = "fluid_vr_joystick_panel", t.appendChild(i);
		var n = e.createCardboardJoystickButton("up"),
			o = e.createCardboardJoystickButton("left"),
			a = e.createCardboardJoystickButton("right"),
			r = e.createCardboardJoystickButton("down"),
			l = e.createCardboardJoystickButton("zoomdefault"),
			s = e.createCardboardJoystickButton("zoomin"),
			d = e.createCardboardJoystickButton("zoomout");
		n.addEventListener("click", function() {
			e.cardboardRotateUpDown(1)
		}), r.addEventListener("click", function() {
			e.cardboardRotateUpDown(0)
		}), a.addEventListener("click", function() {
			e.cardboardRotateLeftRight(0)
		}), o.addEventListener("click", function() {
			e.cardboardRotateLeftRight(1)
		}), l.addEventListener("click", function() {
			e.vrViewer.camera.fov = 60, e.vrViewer.camera.updateProjectionMatrix()
		}), d.addEventListener("click", function() {
			e.vrViewer.camera.fov *= 1.1, e.vrViewer.camera.updateProjectionMatrix()
		}), s.addEventListener("click", function() {
			e.vrViewer.camera.fov *= .9, e.vrViewer.camera.updateProjectionMatrix()
		})
	},
	cardBoardResize: function() {
		var e = this,
			t = document.getElementById(this.videoPlayerId);
		t.addEventListener("theatreModeOn", function() {
			e.vrViewer.onWindowResize()
		}), t.addEventListener("theatreModeOff", function() {
			e.vrViewer.onWindowResize()
		})
	},
	cardBoardSwitchToNormal: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId + "_fluid_vr_joystick_panel"),
			i = document.getElementById(e.videoPlayerId + "_fluid_controls_container"),
			n = document.getElementById(e.videoPlayerId);
		e.vrViewer.enableEffect(PANOLENS.MODES.NORMAL), e.vrViewer.onWindowResize(), e.vrMode = !1;
		var o = n.parentNode.getElementsByClassName("fluid_vr2_controls_container")[0];
		n.parentNode.removeChild(o), e.displayOptions.layoutControls.showCardBoardJoystick && t && (t.style.display = "block"), i.classList.remove("fluid_vr_controls_container"), document.getElementById(e.videoPlayerId + "_fluid_control_volume_container").style.display = "block";
		var a = document.getElementById("ad_countdown" + e.videoPlayerId),
			r = document.getElementById(e.videoPlayerId + "_fluid_cta"),
			l = document.getElementById(e.videoPlayerId + "_fluid_ad_playing"),
			s = document.getElementById("skip_button_" + e.videoPlayerId);
		a && (a.style.display = "block"), r && (r.style.display = "block"), l && (l.style.display = "block"), s && (s.style.display = "block")
	},
	cardBoardHideDefaultControls: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId + "_fluid_vr_joystick_panel"),
			i = document.getElementById(e.videoPlayerId + "_fluid_initial_play"),
			n = document.getElementById(e.videoPlayerId + "_fluid_control_volume_container");
		document.getElementById(e.videoPlayerId + "_fluid_controls_container");
		e.displayOptions.layoutControls.showCardBoardJoystick && t && (t.style.display = "none"), i && (document.getElementById(e.videoPlayerId + "_fluid_initial_play").style.display = "none", document.getElementById(e.videoPlayerId + "_fluid_initial_play_button").style.opacity = "1"), n.style.display = "none"
	},
	cardBoardCreateVRControls: function() {
		var e = document.getElementById(this.videoPlayerId + "_fluid_controls_container"),
			t = document.getElementById(this.videoPlayerId),
			i = e.cloneNode(!0);
		i.removeAttribute("id"), i.querySelectorAll("*").forEach(function(e) {
			e.removeAttribute("id")
		}), i.classList.add("fluid_vr2_controls_container"), t.parentNode.insertBefore(i, t.nextSibling), this.copyEvents(i)
	},
	cardBoardSwitchToVR: function() {
		var e = this,
			t = (document.getElementById(e.videoPlayerId + "_fluid_vr_joystick_panel"), document.getElementById(e.videoPlayerId + "_fluid_controls_container"));
		document.getElementById(e.videoPlayerId);
		e.vrViewer.enableEffect(PANOLENS.MODES.CARDBOARD), e.vrViewer.onWindowResize(), e.vrViewer.disableReticleControl(), e.vrMode = !0, t.classList.add("fluid_vr_controls_container"), e.cardBoardHideDefaultControls(), e.cardBoardCreateVRControls();
		var i = document.getElementById("ad_countdown" + e.videoPlayerId),
			n = document.getElementById(e.videoPlayerId + "_fluid_cta"),
			o = document.getElementById(e.videoPlayerId + "_fluid_ad_playing"),
			a = document.getElementById("skip_button_" + e.videoPlayerId);
		i && (i.style.display = "none"), n && (n.style.display = "none"), o && (o.style.display = "none"), a && (a.style.display = "none")
	},
	cardBoardMoveTimeInfo: function() {
		var e = document.getElementById(this.videoPlayerId + "_fluid_control_duration"),
			t = document.getElementById(this.videoPlayerId + "_fluid_controls_container");
		e.classList.add("cardboard_time"), t.appendChild(e), this.contolDurationUpdate = function(e) {
			var t = fluidPlayerClass.getInstanceById(e),
				i = document.getElementById(e),
				n = t.formatTime(i.currentTime),
				o = t.formatTime(t.currentVideoDuration),
				a = i.parentNode.getElementsByClassName("fluid_control_duration"),
				r = "";
			if (t.isCurrentlyPlayingAd) {
				r = "<span class='ad_timer_prefix'>AD : </span>" + n + " / " + o;
				for (var l = 0; l < a.length; l++) a[l].classList.add("ad_timer_prefix")
			} else {
				r = n + " / " + o;
				for (l = 0; l < a.length; l++) a[l].classList.remove("ad_timer_prefix")
			}
			for (var s = 0; s < a.length; s++) a[s].innerHTML = r
		}
	},
	cardBoardAlterDefaultControls: function() {
		this.cardBoardMoveTimeInfo()
	},
	createCardboardView: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId),
			i = (t.parentNode.getElementsByClassName("fluid_control_cardboard"), document.createElement("div"));
		i.id = e.videoPlayerId + "_fluid_vr_container", i.className = "fluid_vr_container", t.parentNode.insertBefore(i, t.nextSibling), PANOLENS.VideoPanorama.prototype.pauseVideo = function() {}, PANOLENS.VideoPanorama.prototype.playVideo = function() {}, e.vrPanorama = new PANOLENS.VideoPanorama("", {
			videoElement: t,
			autoplay: e.displayOptions.layoutControls.autoPlay
		}), e.vrViewer = new PANOLENS.Viewer({
			container: i,
			controlBar: !0,
			controlButtons: [],
			enableReticle: !1
		}), e.vrViewer.add(e.vrPanorama), e.vrViewer.enableEffect(PANOLENS.MODES.NORMAL), e.vrViewer.onWindowResize(), "Android" !== fluidPlayerClass.getMobileOs().userOs && "iOS" !== fluidPlayerClass.getMobileOs().userOs || e.vrViewer.enableControl(1), e.cardBoardAlterDefaultControls(), e.cardBoardResize(), e.vrViewer.initialCameraPosition = JSON.parse(JSON.stringify(e.vrViewer.camera.position)), e.displayOptions.layoutControls.showCardBoardJoystick && ("Android" !== fluidPlayerClass.getMobileOs().userOs && "iOS" !== fluidPlayerClass.getMobileOs().userOs && e.createCardboardJoystick(), e.vrViewer.OrbitControls.noZoom = !0), e.trackEvent(t.parentNode, "click", ".fluid_control_cardboard", function() {
			e.vrMode ? e.cardBoardSwitchToNormal() : e.cardBoardSwitchToVR()
		})
	},
	createCardboard: function() {
		var e = this;
		e.displayOptions.layoutControls.showCardBoardView ? fluidPlayerClass.requestScript(fluidPlayerScriptLocation + fluidPlayerClass.threeJsScript, function() {
			fluidPlayerClass.requestScript(fluidPlayerScriptLocation + fluidPlayerClass.panolensScript, function() {
				e.createCardboardView()
			})
		}) : document.getElementById(e.videoPlayerId + "_fluid_control_cardboard").style.display = "none"
	},
	createVideoSourceSwitch: function() {
		var a = this,
			r = document.getElementById(a.videoPlayerId),
			t = [],
			e = r.querySelectorAll("source");
		if ([].forEach.call(e, function(e) {
				e.title && e.src && t.push({
					title: e.title,
					url: e.src,
					isHD: null != e.getAttribute("data-fluid-hd")
				})
			}), a.videoSources = t, 1 < a.videoSources.length) {
			var i = document.getElementById(a.videoPlayerId + "_fluid_control_video_source"),
				l = !1,
				s = document.createElement("div");
			s.id = a.videoPlayerId + "_fluid_control_video_source_list", s.className = "fluid_video_sources_list", s.style.display = "none";
			var d = !0;
			a.videoSources.forEach(function(e) {
				var t = e.url.split(".").pop();
				if ("iOS" != a.mobileInfo.userOs || "mkv" != t) {
					var i = d ? "source_selected" : "",
						n = e.isHD ? '<sup style="color:' + a.displayOptions.layoutControls.primaryColor + '" class="fp_hd_source"></sup>' : "";
					d = !1;
					var o = document.createElement("div");
					o.id = "source_" + a.videoPlayerId + "_" + e.title, o.className = "fluid_video_source_list_item", o.innerHTML = '<span class="source_button_icon ' + i + '"></span>' + e.title + n, o.addEventListener("click", function(e) {
						r.style.width = r.clientWidth + "px", r.style.height = r.clientHeight + "px", e.stopPropagation();
						for (var t = this, i = document.getElementsByClassName("source_button_icon"), n = 0; n < i.length; n++) i[n].className = i[n].className.replace("source_selected", "");
						t.firstChild.className += " source_selected", a.videoSources.forEach(function(e) {
							e.title == t.innerText.replace(/(\r\n\t|\n|\r\t)/gm, "") && (a.setBuffering(), a.setVideoSource(e.url), a.fluidStorage.fluidQuality = e.title)
						}), a.openCloseVideoSourceSwitch()
					}), s.appendChild(o), l = !0
				}
			}), l ? (i.appendChild(s), i.addEventListener("click", function() {
				a.openCloseVideoSourceSwitch()
			})) : document.getElementById(a.videoPlayerId + "_fluid_control_video_source").style.display = "none"
		} else document.getElementById(a.videoPlayerId + "_fluid_control_video_source").style.display = "none"
	},
	openCloseVideoSourceSwitch: function() {
		var t = document.getElementById(this.videoPlayerId + "_fluid_control_video_source_list"),
			i = document.getElementById(this.videoPlayerId + "_fluid_control_video_source");
		if (this.isCurrentlyPlayingAd) t.style.display = "none";
		else if ("none" == t.style.display) {
			t.style.display = "block";
			var n = function(e) {
				i.removeEventListener("mouseleave", n), t.style.display = "none"
			};
			i.addEventListener("mouseleave", n)
		} else t.style.display = "none"
	},
	setVideoSource: function(e) {
		var t = this,
			i = document.getElementById(t.videoPlayerId);
		if ("iOS" == t.mobileInfo.userOs && 0 < e.indexOf(".mkv")) return console.log("[FP_ERROR] .mkv files not supported by iOS devices."), !1;
		if (t.isCurrentlyPlayingAd) t.originalSrc = e;
		else {
			var n = !(t.isSwitchingSource = !0);
			i.paused || (i.pause(), n = !0);
			var o = i.currentTime;
			t.setCurrentTimeAndPlay(o, n), i.src = e, t.originalSrc = e, t.displayOptions.layoutControls.mediaType = t.getCurrentSrcType(), t.initialiseStreamers()
		}
	},
	setCurrentTimeAndPlay: function(e, t) {
		var i = document.getElementById(this.videoPlayerId),
			n = this,
			o = function() {
				i.currentTime = e, i.removeEventListener("loadedmetadata", o), "iOS" != n.mobileInfo.userOs && "safari" !== n.getBrowserVersion().browserName.toLowerCase() || i.addEventListener("playing", a), t ? i.play() : (i.pause(), n.controlPlayPauseToggle(n.videoPlayerId)), n.isSwitchingSource = !1, i.style.width = "100%", i.style.height = "100%"
			},
			a = function() {
				this.currentTime = e, i.removeEventListener("playing", a)
			};
		i.addEventListener("loadedmetadata", o, !1), i.load()
	},
	initTitle: function() {
		var e = document.getElementById(this.videoPlayerId);
		if (this.displayOptions.layoutControls.title) {
			var t = document.createElement("div");
			t.id = this.videoPlayerId + "_title", e.parentNode.insertBefore(t, null), t.innerHTML += this.displayOptions.layoutControls.title, t.classList.add("fp_title")
		}
	},
	hasTitle: function() {
		var e = document.getElementById(this.videoPlayerId + "_title"),
			t = this.displayOptions.layoutControls.title;
		return !(!e || null == t)
	},
	hideTitle: function() {
		var e = fluidPlayerClass.getInstanceIdByWrapperId(this.getAttribute("id")),
			t = fluidPlayerClass.getInstanceById(e),
			i = (document.getElementById(e), document.getElementById(t.videoPlayerId + "_title"));
		t.hasTitle() && i.classList.add("fade_out")
	},
	showTitle: function() {
		var e = fluidPlayerClass.getInstanceIdByWrapperId(this.getAttribute("id")),
			t = fluidPlayerClass.getInstanceById(e),
			i = (document.getElementById(e), document.getElementById(t.videoPlayerId + "_title"));
		t.hasTitle() && i.classList.remove("fade_out")
	},
	initLogo: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId);
		if (e.displayOptions.layoutControls.logo.imageUrl) {
			var i = document.createElement("div");
			i.id = e.videoPlayerId + "_logo";
			var n = "logo_maintain_display";
			e.displayOptions.layoutControls.logo.hideWithControls && (n = "initial_controls_show"), i.classList.add(n, "fp_logo");
			var o = document.createElement("img");
			o.id = e.videoPlayerId + "_logo_image", e.displayOptions.layoutControls.logo.imageUrl && (o.src = e.displayOptions.layoutControls.logo.imageUrl), o.style.position = "absolute", o.style.margin = e.displayOptions.layoutControls.logo.imageMargin;
			var a = e.displayOptions.layoutControls.logo.position.toLowerCase(); - 1 !== a.indexOf("bottom") ? o.style.bottom = 0 : o.style.top = 0, -1 !== a.indexOf("right") ? o.style.right = 0 : o.style.left = 0, e.displayOptions.layoutControls.logo.opacity && (o.style.opacity = e.displayOptions.layoutControls.logo.opacity), null !== e.displayOptions.layoutControls.logo.clickUrl && (o.style.cursor = "pointer", o.addEventListener("click", function() {
				window.open(e.displayOptions.layoutControls.logo.clickUrl, "_blank").focus()
			})), e.displayOptions.layoutControls.logo.mouseOverImageUrl && (o.addEventListener("mouseover", function() {
				o.src = e.displayOptions.layoutControls.logo.mouseOverImageUrl
			}, !1), o.addEventListener("mouseout", function() {
				o.src = e.displayOptions.layoutControls.logo.imageUrl
			}, !1)), t.parentNode.insertBefore(i, null), i.appendChild(o, null)
		}
	},
	initHtmlOnPauseBlock: function() {
		var t = this;
		if (!t.hasValidOnPauseAd() && t.displayOptions.layoutControls.htmlOnPauseBlock.html) {
			var i = document.getElementById(t.videoPlayerId),
				e = document.createElement("div");
			e.id = t.videoPlayerId + "_fluid_html_on_pause", e.className = "fluid_html_on_pause", e.style.display = "none", e.innerHTML = t.displayOptions.layoutControls.htmlOnPauseBlock.html, e.onclick = function(e) {
				t.playPauseToggle(i)
			}, t.displayOptions.layoutControls.htmlOnPauseBlock.width && (e.style.width = t.displayOptions.layoutControls.htmlOnPauseBlock.width + "px"), t.displayOptions.layoutControls.htmlOnPauseBlock.height && (e.style.height = t.displayOptions.layoutControls.htmlOnPauseBlock.height + "px"), i.parentNode.insertBefore(e, null)
		}
	},
	initPlayButton: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId),
			i = document.createElement("div");
		i.id = e.videoPlayerId + "_fluid_initial_play_button", i.className = "fluid_html_on_pause";
		var n = e.displayOptions.layoutControls.primaryColor ? e.displayOptions.layoutControls.primaryColor : "#333333";
		i.innerHTML = '<div id="' + e.videoPlayerId + '_fluid_initial_play" class="fluid_initial_play" style="background-color:' + n + '"><div id="' + e.videoPlayerId + '_fluid_state_button" class="fluid_initial_play_button"></div></div>';
		var o = function() {
			e.playPauseToggle(t), i.removeEventListener("click", o)
		};
		i.addEventListener("click", o), e.displayOptions.layoutControls.playButtonShowing || (document.getElementById(e.videoPlayerId + "_fluid_controls_container").classList.add("initial_controls_show"), i.style.opacity = "0");
		t.parentNode.insertBefore(i, null)
	},
	mainVideoReady: function() {
		var e = fluidPlayerClass.getInstanceById(this.id);
		if (0 == e.mainVideoDuration && !e.isCurrentlyPlayingAd && !1 === e.mainVideoReadyState) {
			e.mainVideoDuration = this.duration, e.mainVideoReadyState = !0;
			var t = new CustomEvent("mainVideoDurationSet");
			this.dispatchEvent(t), this.removeEventListener("loadedmetadata", e.mainVideoReady)
		}
	},
	userActivityChecker: function() {
		var t = this,
			e = document.getElementById("fluid_video_wrapper_" + t.videoPlayerId),
			i = document.getElementById(t.videoPlayerId);
		t.newActivity = null;

		function n(e) {
			"touchstart" !== e.type && "mousedown" !== e.type || (o = !0), "touchend" !== e.type && "mouseup" !== e.type || (o = !1), t.newActivity = !0
		}
		for (var o = !1, a = (setInterval(function() {
				if (!0 === t.newActivity) {
					if (o || t.isLoading || (t.newActivity = !1), !1 === t.isUserActive || !t.isControlBarVisible()) {
						var e = new CustomEvent("userActive");
						i.dispatchEvent(e), t.isUserActive = !0
					}
					clearTimeout(t.inactivityTimeout), t.inactivityTimeout = setTimeout(function() {
						!0 !== t.newActivity ? (t.isUserActive = !1, e = new CustomEvent("userInactive"), i.dispatchEvent(e)) : clearTimeout(t.inactivityTimeout)
					}, 1e3 * t.displayOptions.layoutControls.controlBar.autoHideTimeout)
				}
			}, 300), fluidPlayerClass.isTouchDevice() ? ["touchstart", "touchmove", "touchend"] : ["mousemove", "mousedown", "mouseup"]), r = 0; r < a.length; r++) e.addEventListener(a[r], n)
	},
	hasControlBar: function() {
		return !!document.getElementById(this.videoPlayerId + "_fluid_controls_container")
	},
	isControlBarVisible: function() {
		if (!1 === this.hasControlBar()) return !1;
		var e = document.getElementById(this.videoPlayerId + "_fluid_controls_container"),
			t = window.getComputedStyle(e, null);
		return !(0 == t.opacity || "hidden" == t.visibility)
	},
	setVideoPreload: function() {
		document.getElementById(this.videoPlayerId).setAttribute("preload", this.displayOptions.layoutControls.preload)
	},
	hideControlBar: function() {
		var e = fluidPlayerClass.getInstanceIdByWrapperId(this.getAttribute("id")),
			t = fluidPlayerClass.getInstanceById(e),
			i = document.getElementById(e);
		if (t.isCurrentlyPlayingAd && !i.paused && t.toggleAdCountdown(!0), t.hasControlBar()) {
			for (var n = i.parentNode.getElementsByClassName("fluid_controls_container"), o = i.parentNode.getElementsByClassName("fp_logo"), a = 0; a < n.length; a++) t.displayOptions.layoutControls.controlBar.animated ? (n[a].classList.remove("fade_in"), n[a].classList.add("fade_out")) : n[a].style.display = "none";
			for (a = 0; a < o.length; a++) t.displayOptions.layoutControls.controlBar.animated ? o[a] && (o[a].classList.remove("fade_in"), o[a].classList.add("fade_out")) : o[a] && (o[a].style.display = "none")
		}
		i.style.cursor = "none"
	},
	showControlBar: function() {
		var e = fluidPlayerClass.getInstanceIdByWrapperId(this.getAttribute("id")),
			t = fluidPlayerClass.getInstanceById(e),
			i = document.getElementById(e);
		if (t.isCurrentlyPlayingAd && !i.paused && t.toggleAdCountdown(!1), t.hasControlBar()) {
			for (var n = i.parentNode.getElementsByClassName("fluid_controls_container"), o = i.parentNode.getElementsByClassName("fp_logo"), a = 0; a < n.length; a++) t.displayOptions.layoutControls.controlBar.animated ? (n[a].classList.remove("fade_out"), n[a].classList.add("fade_in")) : n[a].style.display = "block";
			for (a = 0; a < o.length; a++) t.displayOptions.layoutControls.controlBar.animated ? o[a] && (o[a].classList.remove("fade_out"), o[a].classList.add("fade_in")) : o[a] && (o[a].style.display = "block")
		}
		fluidPlayerClass.isTouchDevice() || (i.style.cursor = "default")
	},
	linkControlBarUserActivity: function() {
		var e = this,
			t = document.getElementById(e.videoPlayerId);
		t.addEventListener("userInactive", e.hideControlBar), t.addEventListener("userActive", e.showControlBar), t.addEventListener("userInactive", e.hideTitle), t.addEventListener("userActive", e.showTitle)
	},
	initMute: function() {
		!0 === this.displayOptions.layoutControls.mute && (document.getElementById(this.videoPlayerId).volume = 0)
	},
	initLoop: function() {
		var e = document.getElementById(this.videoPlayerId);
		null !== this.displayOptions.layoutControls.loop ? e.loop = this.displayOptions.layoutControls.loop : e.loop && (this.displayOptions.layoutControls.loop = !0)
	},
	setBuffering: function() {
		for (var o = document.getElementById(this.videoPlayerId), a = o.parentNode.getElementsByClassName("fluid_controls_buffered"), e = 0; e < a.length; e++) a[e].style.width = 0;
		logProgress = function() {
			var e = o.duration;
			if (0 < e)
				for (var t = 0; t < o.buffered.length; t++)
					if (o.buffered.start(o.buffered.length - 1 - t) < o.currentTime) {
						for (var i = o.buffered.end(o.buffered.length - 1 - t) / e * 100 + "%", n = 0; n < a.length; n++) a[n].style.width = i;
						o.buffered.end(o.buffered.length - 1 - t) / e == "1" && clearInterval(r);
						break
					}
		};
		var r = setInterval(logProgress, 500)
	},
	createPlaybackList: function() {
		var i = this;
		if (i.displayOptions.layoutControls.playbackRateEnabled) {
			var e = document.getElementById(i.videoPlayerId + "_fluid_control_playback_rate"),
				n = document.createElement("div");
			n.id = i.videoPlayerId + "_fluid_control_video_playback_rate", n.className = "fluid_video_playback_rates", n.style.display = "none", ["x2", "x1.5", "x1", "x0.5"].forEach(function(e) {
				var t = document.createElement("div");
				t.className = "fluid_video_playback_rates_item", t.innerText = e, t.addEventListener("click", function(e) {
					e.stopPropagation(), playbackRate = this.innerText.replace("x", ""), i.setPlaybackSpeed(playbackRate), i.openCloseVideoPlaybackRate()
				}), n.appendChild(t)
			}), e.appendChild(n), e.addEventListener("click", function() {
				i.openCloseVideoPlaybackRate()
			})
		} else document.getElementById(i.videoPlayerId + "_fluid_control_playback_rate").style.display = "none"
	},
	openCloseVideoPlaybackRate: function() {
		var e = document.getElementById(this.videoPlayerId + "_fluid_control_video_playback_rate"),
			t = document.getElementById(this.videoPlayerId + "_fluid_control_playback_rate");
		if (this.isCurrentlyPlayingAd) e.style.display = "none";
		else if ("none" == e.style.display) {
			e.style.display = "block";
			var i = function() {
				t.removeEventListener("mouseleave", i), e.style.display = "none"
			};
			t.addEventListener("mouseleave", i)
		} else e.style.display = "none"
	},
	createDownload: function() {
		var t = this,
			e = document.getElementById(this.videoPlayerId + "_fluid_control_download");
		t.displayOptions.layoutControls.allowDownload ? (downloadClick = document.createElement("a"), downloadClick.id = this.videoPlayerId + "_download", downloadClick.onclick = function(e) {
			var t = this;
			void 0 !== e.stopImmediatePropagation && e.stopImmediatePropagation(), setInterval(function() {
				t.download = "", t.href = ""
			}, 100)
		}, e.appendChild(downloadClick), e.addEventListener("click", function() {
			var e = document.getElementById(t.videoPlayerId + "_download");
			e.download = t.originalSrc, e.href = t.originalSrc, downloadClick.click()
		})) : e.style.display = "none"
	},
	theatreToggle: function() {
		if (!this.isInIframe) {
			if (this.fullscreenMode && this.fullscreenToggle(), this.displayOptions.layoutControls.theatreAdvanced) {
				var e = document.getElementById(this.displayOptions.layoutControls.theatreAdvanced.theatreElement),
					t = this.displayOptions.layoutControls.theatreAdvanced.classToApply;
				null != e && null != t ? (this.theatreMode ? e.classList.remove(t) : e.classList.add(t), this.theatreModeAdvanced = !this.theatreModeAdvanced) : (console.log("[FP_ERROR] Theatre mode elements could not be found, defaulting behaviour."), this.defaultTheatre())
			} else this.defaultTheatre();
			this.theatreMode = !this.theatreMode, this.fluidStorage.fluidTheatre = this.theatreMode;
			var i = document.getElementById(this.videoPlayerId),
				n = this.theatreMode ? "theatreModeOn" : "theatreModeOff",
				o = document.createEvent("CustomEvent");
			o.initEvent(n, !1, !0), i.dispatchEvent(o), this.resizeVpaidAuto()
		}
	},
	defaultTheatre: function() {
		var e = document.getElementById("fluid_video_wrapper_" + this.videoPlayerId);
		if (this.theatreMode) e.classList.remove("fluid_theatre_mode"), e.style.maxHeight = "", e.style.marginTop = "", e.style.left = "", e.style.right = "", e.style.position = "", this.displayOptions.layoutControls.fillToContainer ? (e.style.width = "100%", e.style.height = "100%") : (e.style.width = this.originalWidth + "px", e.style.height = this.originalHeight + "px");
		else {
			e.classList.add("fluid_theatre_mode");
			var t = this.displayOptions.layoutControls.theatreSettings.width,
				i = "10px";
			switch (e.style.width = t, e.style.height = this.displayOptions.layoutControls.theatreSettings.height, e.style.maxHeight = screen.height + "px", e.style.marginTop = this.displayOptions.layoutControls.theatreSettings.marginTop + "px", this.displayOptions.layoutControls.theatreSettings.horizontalAlign) {
				case "center":
					"string" == typeof t && "%" == t.substr(t.length - 1) ? i = (100 - parseInt(t.substring(0, t.length - 1))) / 2 + "%" : "string" == typeof t && "px" == t.substr(t.length - 2) ? i = (screen.width - parseInt(t.substring(0, t.length - 2))) / screen.width * 100 / 2 + "%" : console.log("[FP_ERROR] Theatre width specified invalid."), e.style.left = i;
					break;
				case "right":
					e.style.right = i;
					break;
				case "left":
				default:
					e.style.left = i
			}
		}
	},
	posterImage: function() {
		if (this.displayOptions.layoutControls.posterImage) {
			var e = document.createElement("div");
			if (e.id = this.videoPlayerId + "_fluid_pseudo_poster", e.className = "fluid_pseudo_poster", -1 === ["auto", "contain", "cover"].indexOf(this.displayOptions.layoutControls.posterImageSize)) return void console.log("[FP_ERROR] Not allowed value in posterImageSize");
			e.style.background = "url('" + this.displayOptions.layoutControls.posterImage + "') center center / " + this.displayOptions.layoutControls.posterImageSize + " no-repeat black", document.getElementById(this.videoPlayerId).parentNode.insertBefore(e, null)
		}
	},
	initialiseStreamers: function() {
		switch (this.detachStreamers(), this.displayOptions.layoutControls.mediaType) {
			case "application/dash+xml":
				this.dashScriptLoaded ? this.initialiseDash() : (this.dashScriptLoaded = !0, fluidPlayerClass.requestScript(fluidPlayerScriptLocation + fluidPlayerClass.dashJsScript, this.initialiseDash.bind(this)));
				break;
			case "application/x-mpegURL":
				this.hlsScriptLoaded || window.Hls ? this.initialiseHls() : (this.hlsScriptLoaded = !0, fluidPlayerClass.requestScript(fluidPlayerScriptLocation + fluidPlayerClass.hlsJsScript, this.initialiseHls.bind(this)))
		}
	},
	initialiseDash: function() {
		if ("function" == typeof(window.MediaSource || window.WebKitMediaSource)) {
			var e = this.autoplayAfterAd ? this.displayOptions.layoutControls.autoPlay : this.autoplayAfterAd,
				t = dashjs.MediaPlayer().create();
			t.updateSettings({
				debug: {
					logLevel: dashjs.Debug.LOG_LEVEL_NONE
				}
			}), t.initialize(document.getElementById(this.videoPlayerId), this.originalSrc, e), this.dashPlayer = t
		} else this.nextSource(), console.log("[FP_ERROR] Media type not supported by this browser. (application/dash+xml)")
	},
	initialiseHls: function() {
		if (Hls.isSupported()) {
			var e = new Hls(this.displayOptions.hlsjsConfig);
			e.attachMedia(document.getElementById(this.videoPlayerId)), e.loadSource(this.originalSrc), this.hlsPlayer = e, !this.firstPlayLaunched && this.displayOptions.layoutControls.autoPlay && document.getElementById(this.videoPlayerId).play()
		} else this.nextSource(), console.log("[FP_ERROR] Media type not supported by this browser. (application/x-mpegURL)")
	},
	detachStreamers: function() {
		this.dashPlayer ? (this.dashPlayer.reset(), this.dashPlayer = !1) : this.hlsPlayer && (this.hlsPlayer.detachMedia(), this.hlsPlayer = !1)
	},
	nextSource: function() {
		var e = document.getElementById(this.videoPlayerId).getElementsByTagName("source");
		if (e.length)
			for (var t = 0; t < e.length - 1; t++)
				if (e[t].getAttribute("src") == this.originalSrc && e[t + 1].getAttribute("src")) return void this.setVideoSource(e[t + 1].getAttribute("src"));
		return null
	},
	inIframe: function() {
		try {
			return window.self !== window.top
		} catch (e) {
			return !0
		}
	},
	setPersistentSettings: function() {
		if ("undefined" != typeof Storage && "undefined" != typeof localStorage) {
			if (this.fluidStorage = localStorage, void 0 !== this.fluidStorage.fluidVolume && this.displayOptions.layoutControls.persistentSettings.volume && (this.setVolume(this.fluidStorage.fluidVolume), void 0 !== this.fluidStorage.fluidMute && "true" == this.fluidStorage.fluidMute && this.muteToggle(this.videoPlayerId)), void 0 !== this.fluidStorage.fluidQuality && this.displayOptions.layoutControls.persistentSettings.quality) {
				var e = document.getElementById("source_" + this.videoPlayerId + "_" + this.fluidStorage.fluidQuality),
					t = document.getElementById(this.videoPlayerId + "_fluid_control_video_source");
				e && (e.click(), t.click())
			}
			void 0 !== this.fluidStorage.fluidSpeed && this.displayOptions.layoutControls.persistentSettings.speed && this.setPlaybackSpeed(this.fluidStorage.fluidSpeed), void 0 !== this.fluidStorage.fluidTheatre && "true" == this.fluidStorage.fluidTheatre && this.displayOptions.layoutControls.persistentSettings.theatre && this.theatreToggle()
		}
	},
	init: function(e, t) {
		var i = this,
			n = document.getElementById(e);
		for (var o in n.setAttribute("playsinline", ""), n.setAttribute("webkit-playsinline", ""), i.vrROTATION_POSITION = .1, i.vrROTATION_SPEED = 80, i.vrMode = !1, i.vrPanorama = null, i.vrViewer = null, i.vpaidTimer = null, i.vpaidAdUnit = null, i.vastOptions = null, i.videoPlayerId = e, i.originalSrc = i.getCurrentSrc(), i.isCurrentlyPlayingAd = !1, i.recentWaiting = !1, i.latestVolume = 1, i.currentVideoDuration = 0, i.firstPlayLaunched = !1, i.suppressClickthrough = !1, i.timelinePreviewData = [], i.mainVideoCurrentTime = 0, i.mainVideoDuration = 0, i.isTimer = !1, i.timer = null, i.timerPool = {}, i.adList = {}, i.adPool = {}, i.adGroupedByRolls = {}, i.onPauseRollAdPods = [], i.currentOnPauseRollAd = "", i.preRollAdsResolved = !1, i.preRollAdPods = [], i.preRollAdPodsLength = 0, i.preRollVastResolved = 0, i.temporaryAdPods = [], i.availableRolls = ["preRoll", "midRoll", "postRoll", "onPauseRoll"], i.supportedNonLinearAd = ["300x250", "468x60", "728x90"], i.autoplayAfterAd = !0, i.nonLinearDuration = 15, i.supportedStaticTypes = ["image/gif", "image/jpeg", "image/png"], i.inactivityTimeout = null, i.isUserActive = null, i.nonLinearVerticalAlign = "bottom", i.vpaidNonLinearCloseButton = !0, i.showTimeOnHover = !0, i.initialAnimationSet = !0, i.theatreMode = !1, i.theatreModeAdvanced = !1, i.fullscreenMode = !1, i.originalWidth = n.offsetWidth, i.originalHeight = n.offsetHeight, i.dashPlayer = !1, i.hlsPlayer = !1, i.dashScriptLoaded = !1, i.hlsScriptLoaded = !1, i.isPlayingMedia = !1, i.isSwitchingSource = !1, i.isLoading = !1, i.isInIframe = i.inIframe(), i.mainVideoReadyState = !1, i.xmlCollection = [], i.inLineFound = null, i.fluidStorage = {}, i.fluidPseudoPause = !1, i.mobileInfo = fluidPlayerClass.getMobileOs(), i.events = {}, i.displayOptions = {
				layoutControls: {
					mediaType: i.getCurrentSrcType(),
					primaryColor: !1,
					posterImage: !1,
					posterImageSize: "contain",
					adProgressColor: "#f9d300",
					playButtonShowing: !0,
					playPauseAnimation: !0,
					closeButtonCaption: "Close",
					fillToContainer: !1,
					autoPlay: !1,
					preload: "auto",
					mute: !1,
					loop: null,
					keyboardControl: !0,
					allowDownload: !1,
					playbackRateEnabled: !1,
					subtitlesEnabled: !1,
					showCardBoardView: !1,
					showCardBoardJoystick: !1,
					allowTheatre: !0,
					doubleclickFullscreen: !0,
					theatreSettings: {
						width: "100%",
						height: "60%",
						marginTop: 0,
						horizontalAlign: "center",
						keepPosition: !1
					},
					theatreAdvanced: !1,
					title: null,
					logo: {
						imageUrl: null,
						position: "top left",
						clickUrl: null,
						opacity: 1,
						mouseOverImageUrl: null,
						imageMargin: "2px",
						hideWithControls: !1,
						showOverAds: !1
					},
					controlBar: {
						autoHide: !1,
						autoHideTimeout: 3,
						animated: !0
					},
					timelinePreview: {
						spriteImage: !1,
						spriteRelativePath: !1
					},
					htmlOnPauseBlock: {
						html: null,
						height: null,
						width: null
					},
					layout: "default",
					playerInitCallback: function() {},
					persistentSettings: {
						volume: !0,
						quality: !0,
						speed: !0,
						theatre: !0
					}
				},
				vastOptions: {
					adList: {},
					skipButtonCaption: "Skip ad in [seconds]",
					skipButtonClickCaption: 'Skip Ad <span class="skip_button_icon"></span>',
					adText: null,
					adTextPosition: "top left",
					adCTAText: "Visit now!",
					adCTATextPosition: "bottom right",
					adClickable: !0,
					vastTimeout: 5e3,
					showProgressbarMarkers: !1,
					allowVPAID: !1,
					showPlayButton: !1,
					maxAllowedVastTagRedirects: 3,
					vpaidTimeout: 3e3,
					vastAdvanced: {
						vastLoadedCallback: function() {},
						noVastVideoCallback: function() {},
						vastVideoSkippedCallback: function() {},
						vastVideoEndedCallback: function() {}
					}
				},
				hlsjsConfig: {
					p2pConfig: {
						logLevel: !1
					},
					enableWebVTT: !1,
					enableCEA708Captions: !1
				},
				captions: {
					play: "Play",
					pause: "Pause",
					mute: "Mute",
					unmute: "Unmute",
					fullscreen: "Fullscreen",
					subtitles: "Subtitles",
					exitFullscreen: "Exit Fullscreen"
				},
				debug: !1
			}, t)
			if ("object" == typeof t[o])
				for (var a in t[o]) i.displayOptions[o][a] = t[o][a];
			else i.displayOptions[o] = t[o];
		i.setupPlayerWrapper(), i.initialiseStreamers(), n.addEventListener("webkitfullscreenchange", i.recalculateAdDimensions, !1), n.addEventListener("fullscreenchange", i.recalculateAdDimensions, !1), n.addEventListener("waiting", i.onRecentWaiting, !1), n.addEventListener("pause", i.onFluidPlayerPause, !1), n.addEventListener("loadedmetadata", i.mainVideoReady, !1), n.addEventListener("durationchange", function() {
			i.currentVideoDuration = i.getCurrentVideoDuration()
		}, !1), n.addEventListener("error", i.onErrorDetection, !1), n.addEventListener("ended", i.onMainVideoEnded, !1), i.displayOptions.layoutControls.showCardBoardView && n.setAttribute("crossOrigin", "anonymous"), i.currentVideoDuration = i.getCurrentVideoDuration(), isNaN(i.currentVideoDuration) && (i.currentVideoDuration = 0), i.setLayout(), i.latestVolume = n.volume, i.initialAnimationSet = i.displayOptions.layoutControls.playPauseAnimation, i.handleFullscreen(), i.initLogo(), i.initTitle(), i.initMute(), i.initLoop(), i.displayOptions.layoutControls.playerInitCallback(), i.createVideoSourceSwitch(), i.createSubtitles(), i.createCardboard(), i.userActivityChecker(), i.setVastList(), i.setPersistentSettings();
		var r = n.play;
		n.play = function() {
			var e = null,
				t = fluidPlayerClass.getInstanceById(this.id);
			t.displayOptions.layoutControls.showCardBoardView && "undefined" != typeof DeviceOrientationEvent && "function" == typeof DeviceOrientationEvent.requestPermission && DeviceOrientationEvent.requestPermission().then(function(e) {
				"granted" === e && t.debugMessage("DeviceOrientationEvent permission granted!")
			}).catch(console.error);
			try {
				null != (e = r.apply(this, arguments)) && (e.then(function() {
					t.isPlayingMedia = !0, clearTimeout(t.promiseTimeout)
				}).catch(function(e) {
					void 0 !== e.name && "AbortError" === e.name || t.announceLocalError(202, "Failed to play video."), clearTimeout(t.promiseTimeout)
				}), t.promiseTimeout = setTimeout(function() {
					!1 === t.isPlayingMedia && t.announceLocalError(204, "Timeout error. Failed to play video.")
				}, 5e3))
			} catch (e) {
				t.announceLocalError(201, "Failed to play video.")
			}
		};
		var l = n.pause;
		if (n.pause = function() {
				var t = fluidPlayerClass.getInstanceById(this.id);
				if (!0 === t.isPlayingMedia) return t.isPlayingMedia = !1, l.apply(this, arguments);
				if (t.isCurrentlyPlayingVideo(this)) try {
					return t.isPlayingMedia = !1, l.apply(this, arguments)
				} catch (e) {
					t.announceLocalError(203, "Failed to play video.")
				}
			}, i.displayOptions.layoutControls.autoPlay && !i.dashScriptLoaded && !i.hlsScriptLoaded) {
			var s = fluidPlayerClass.getBrowserVersion();
			if ("Safari" == s.browserName && 11 <= s.majorVersion) return;
			n.play()
		}
		var d = document.getElementById("fluid_video_wrapper_" + n.id);
		i.mobileInfo.userOs ? (i.hideControlBar.call(d), d.addEventListener("touchstart", i.showControlBar, !1)) : (d.addEventListener("mouseleave", i.handleMouseleave, !1), d.addEventListener("mouseenter", i.showControlBar, !1), d.addEventListener("mouseenter", i.showTitle, !1)), i.displayOptions.layoutControls.keyboardControl && i.keyboardControl(), i.displayOptions.layoutControls.controlBar.autoHide && i.linkControlBarUserActivity();
		try {
			[].forEach.call(videoPlayerTag.textTracks, function(e) {
				e.mode = "hidden"
			})
		} catch (e) {}
	},
	play: function() {
		var e = document.getElementById(this.videoPlayerId);
		return e.paused && this.playPauseToggle(e), !0
	},
	pause: function() {
		var e = document.getElementById(this.videoPlayerId);
		return e.paused || this.playPauseToggle(e), !0
	},
	skipTo: function(e) {
		document.getElementById(this.videoPlayerId).currentTime = e
	},
	setPlaybackSpeed: function(e) {
		this.isCurrentlyPlayingAd || (document.getElementById(this.videoPlayerId).playbackRate = e, this.fluidStorage.fluidSpeed = e)
	},
	setVolume: function(e) {
		document.getElementById(this.videoPlayerId).volume = e, this.latestVolume = e, this.fluidStorage.fluidVolume = e
	},
	isCurrentlyPlayingVideo: function(e) {
		return e && 0 < e.currentTime && !e.paused && !e.ended && 2 < e.readyState
	},
	setHtmlOnPauseBlock: function(e) {
		if ("object" != typeof e || void 0 === e.html) return !1;
		var t = document.getElementById(this.videoPlayerId + "_fluid_html_on_pause");
		if (t) t.innerHTML = e.html, e.width && (t.style.width = e.width + "px"), e.height && (t.style.height = e.height + "px");
		else {
			var i = document.getElementById(player.videoPlayerId),
				n = document.createElement("div");
			n.id = player.videoPlayerId + "_fluid_html_on_pause", n.className = "fluid_html_on_pause", n.style.display = "none", n.innerHTML = e.html, n.onclick = function() {
				player.playPauseToggle(i)
			}, e.width && (n.style.width = e.width + "px"), e.height && (n.style.height = e.height + "px"), i.parentNode.insertBefore(n, null)
		}
	},
	toggleControlBar: function(e) {
		var t = document.getElementById(this.videoPlayerId + "_fluid_controls_container");
		e ? t.className += " initial_controls_show" : t.className = t.className.replace(" initial_controls_show", "")
	},
	toggleFullscreen: function(e) {
		this.fullscreenMode != e && (e && this.theatreMode && this.theatreToggle(), this.fullscreenToggle())
	},
	on: function(e, t) {
		var i = document.getElementById(this.videoPlayerId),
			n = this;
		switch (e) {
			case "play":
				i.onplay = t;
				break;
			case "seeked":
				i.onseeked = t;
				break;
			case "ended":
				i.onended = t;
				break;
			case "pause":
				i.addEventListener("pause", function() {
					n.fluidPseudoPause || t()
				});
				break;
			case "playing":
				i.addEventListener("playing", function() {
					t()
				});
				break;
			case "theatreModeOn":
				i.addEventListener("theatreModeOn", function() {
					t()
				});
				break;
			case "theatreModeOff":
				i.addEventListener("theatreModeOff", function() {
					t()
				});
				break;
			default:
				console.log("[FP_ERROR] Event not recognised")
		}
	},
	toggleLogo: function(e) {
		if ("object" != typeof e || !e.imageUrl) return !1;
		var t = document.getElementById(this.videoPlayerId + "_logo");
		this.displayOptions.layoutControls.logo.imageUrl = e.imageUrl ? e.imageUrl : null, this.displayOptions.layoutControls.logo.position = e.position ? e.position : "top left", this.displayOptions.layoutControls.logo.clickUrl = e.clickUrl ? e.clickUrl : null, this.displayOptions.layoutControls.logo.opacity = e.opacity ? e.opacity : 1, this.displayOptions.layoutControls.logo.mouseOverImageUrl = e.mouseOverImageUrl ? e.mouseOverImageUrl : null, this.displayOptions.layoutControls.logo.imageMargin = e.imageMargin ? e.imageMargin : "2px", this.displayOptions.layoutControls.logo.hideWithControls = !!e.hideWithControls && e.hideWithControls, this.displayOptions.layoutControls.logo.showOverAds = !!e.showOverAds && e.showOverAds, t && t.remove(), this.initLogo()
	},
	trackEvent: function(e, t, i, n) {
		var o = this;
		void 0 === o.events[i] && (o.events[i] = {}), void 0 === o.events[i][t] && (o.events[i][t] = []), o.events[i][t].push(n), o.registerListener(e, t, i, n)
	},
	registerListener: function(e, t, i, n) {
		for (var o = e.querySelectorAll(i), a = 0; a < o.length; a++) o[a].addEventListener(t, n)
	},
	copyEvents: function(e) {
		var t = this;
		for (var i in t.events)
			if (t.events.hasOwnProperty(i))
				for (var n in t.events[i])
					if (t.events[i].hasOwnProperty(n))
						for (var o = 0; o < t.events[i][n].length; o++) t.registerListener(e, n, i, t.events[i][n][o])
	},
	destroy: function() {
		var e = this.destructors.length;
		if (0 !== e) {
			for (var t = 0; t < e; ++t) this.destructors[t].bind(this)();
			var i = document.getElementById("fluid_video_wrapper_" + player.videoPlayerId);
			i ? "function" != typeof i.remove ? i.parentNode ? i.parentNode.removeChild(i) : console.error("Unable to remove wrapper element for Fluid Player instance - no parent" + player.videoPlayerId) : i.remove() : console.warn("Unable to remove wrapper element for Fluid Player instance - element not found " + player.videoPlayerId)
		}
	}
};
