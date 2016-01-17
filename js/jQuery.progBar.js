/*
 *
 * progBar.js
 * Raphael Picard - © 2014 
 * 
 * How to use it :
 * 
 * HTML :
 * <div class="parent">
 * 		<div  id="yourDiv" style="width: 0%;color:red;"></div>
 * </div>
 *
 * JS :
 * $('#yourDiv').progBar({
 *		finish : 68,
 *		start : 0,
 *		speed : 30,
 *		title : 'Finish'
 * });
 *
 */
(function($){$.fn.extend({progBar:function(options){'use strict';var $container=this,defaults={finish:100,start:0,speed:15,title:''};options=$.extend(defaults,options);var finish=options.finish,start=options.start,speed=options.speed,title=options.title;this.init=function(options){$container.parent().attr('title',finish+'% '+title);_progressBarUpdate()};var _progressBarUpdate=function(e){$container.css('width',start+'%');if(start<=finish){start++;setTimeout(function(){_progressBarUpdate()},speed)}};return this.init(options)}})}(jQuery));